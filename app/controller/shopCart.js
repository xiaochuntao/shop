'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 加入购物车
  async addShopCart() {
    let { id } = this.ctx.request.body
    let { ctx, app } = this
    if (!ctx.request.body.id) {
      this.error('缺少重要参数id')
      return
    }
    console.log(ctx.model.ShopCart);
    let goodsData = await this.ctx.model.ShopCart.findOne({ id })
    // 购物车已经有了这条商品，商品默认+1
    if (goodsData) {
      await this.ctx.model.ShopCart.findOneAndUpdate(id, {
        $set: {
          count: goodsData.count += 1
        }
      })
    } else { // 说明没有这条数据
      // 查到这条商品数据
      let goods = await this.ctx.model.Shoplist.findOne({ _id: id })
      //console.log(goods)
      let newGoods = new app.model.ShopCart({
        present_price: goods.shopPrice,
        cid: goods.id,
        image_path: goods.shopImages,
        name: goods.shopName,
        mallPrice: goods.shopPrice,
        check: false,
        count: 1,
        add_time: +new Date()
      })
      await newGoods.save()
    }
    ctx.body = {
      msg: '加入购物车成功'
    }
  }
  // 查询购物车
  async getShopCart() {
    //查询
    let shopCarts = await this.ctx.model.ShopCart.find()
    this.ctx.body = {
      code: 200,
      data: shopCarts
    }
  }
  // 购物车增加减少
  async editCart() {
    const data = this.ctx.request.body
    const { ctx } = this
    if (!data) {
      this.error('缺少重要参数')
      return
    }
    await ctx.model.ShopCart.findOneAndUpdate({ cid: data.id }, {
      $set: {
        'count': data.count,
        'mallPrice': data.mallPrice,
      }
    })
    ctx.body = {
      msg: '修改成功'
    }
  }
  // 购物车删除
  async deleteShopCart() {
    // 删除
    let { id } = this.ctx.request.body
    let res = await this.ctx.model.ShopCart.findOneAndRemove({
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
