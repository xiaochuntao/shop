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
    // 订单信息
    let platform = '622'; // 订单头;
    let r1 = Math.floor(Math.random() * 10);
    let r2 = Math.floor(Math.random() * 10);
    let order_id = platform + r1 + r2; // 订单id
    let goods = await this.ctx.model.Shoplist.findOne({ _id: id })
    let order = new app.model.Order({
      cid: goods.id,
      image_path: goods.shopImages,
      name: goods.shopName,
      present_price: goods.shopPrice,
      add_time: +new Date(),
      order_id
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
    let platform = '62222222' // 订单头
    let r1 = Math.floor(Math.random() * 1000)
    let r2 = Math.floor(Math.random() * 10000)
    // let sysDate = ctx.helper.format(new Date(), 'YYYYMMDDHHmmss') // 系统时间
    // let add_time = ctx.helper.format(new Date(), 'YYYY-MM-DD HH:mm:ss') // 订单创建时间
    let order_id = platform + r1 + r2; // 订单id
    let shopList = []
    // 购物车来的
    let goods = await this.ctx.model.ShopCart.findOne({ _id: id })
    let order = new app.model.Order({
      cid: goods.id,
      image_path: goods.image_path,
      name: goods.name,
      present_price: goods.present_price,
      add_time: +new Date(),
      order_id
    })
    await order.save()
    // 删除购物车列表的商品
    if (!id.idDirect) {
      await ctx.model.ShopCart.deleteMany({ _id: id })
    }
    ctx.body = {
      code: 200,
      msg: '提交成功'
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
