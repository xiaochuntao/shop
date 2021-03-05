'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 直接购买提交订单
  async addOrder() {
    let { id } = this.ctx.request.body
    let { ctx, app } = this
    if (!ctx.request.body.id) {
      this.error('缺少重要参数id')
      return
    }
    let goods = await this.ctx.model.Shoplist.findOne({ _id: id })
    let order = new app.model.Order({
      cid: goods.id,
      image_path: goods.shopImages,
      name: goods.shopName,
      present_price: goods.shopPrice,
      add_time: +new Date()
    })
    await order.save()
    ctx.body = {
        msg: '提交成功'
    }
  }
  // 购物车购买提交订单
  async order() {
    let { id } = this.ctx.request.body
    let { ctx, app } = this
    if (!ctx.request.body.id) {
      this.error('缺少重要参数')
      return
    }
    // 订单信息
    let platform = '622' // 订单头
    let r1 = Math.floor(Math.random() * 10)
    let r2 = Math.floor(Math.random() * 10)
    let sysDate = ctx.helper.format(new Date(), 'YYYYMMDDHHmmss') // 系统时间
    let add_time = ctx.helper.format(new Date(), 'YYYY-MM-DD HH:mm:ss') // 订单创建时间
    let order_id = platform + r1 + sysDate + r2; // 订单id
    let shopList = []
    // 根据id查询出购物车订单
    for (let i = 0; i < data.orderId.length; i++) {
      // 购物车来的
      let item = await ctx.model.ShopList.find({ cid: id.orderId[i] })
      let datas = item[0]
      shopList[i] = {
        count: datas.count,
        present_price: datas.shopPrice,
        cid: datas.id,
        image_path: datas.shopImages,
        name: datas.shopName,
        mallPrice: datas.count * datas.present_price,
        order_id
      } 
    }
    // 计算商品的总价（后端计算）
    const mallPrice = shopList.reduce((x, y) => {
      return x + y.present_price * y.count;
    }, 0)
    let orders = {
      status: 4,
      order_id,
      tel: data.tel,
      address: data.address,
      add_time,
      mallPrice,
      order_list: shopList
    }
    // 存入数据库
    let orderList = new app.model.Order(orders)
    await orderList.save()
    // 删除购物车列表的商品
    if (!id.idDirect) {
      await ctx.model.ShopList.deleteMany({ cid: id.orderId })
    }
    ctx.body = {
      code: 200,
      msg: `结算成功,一共 ${mallPrice.toFixed(2)} 元`
    }
  }
  // 查询订单
  async getOrder() {
    //查询
    let orders = await this.ctx.model.Order.find()
    this.ctx.body = {
      code: 200,
      data: orders
    }
  }
  // 订单删除
  async deleteOrde() {
    // 删除
    let { id } = this.ctx.request.body
    let res = await this.ctx.model.Order.findOneAndRemove({
      _id: id
    })
    if (res) {
      this.ctx.body = {
        code: 200,
        msg: '删除成功'
      }
    } else {
      this.ctx.body = {
        code: 500,
        msg: '删除失败'
      }
    }
  }
}

module.exports = UserController;
