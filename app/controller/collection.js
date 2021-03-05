'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 收藏商品
  async collection() {
    let { id } = this.ctx.request.body
    let { ctx, app } = this
    if (!ctx.request.body.id) {
      this.error('缺少重要参数id')
      return
    }
    let goods = await this.ctx.model.Shoplist.findOne({ _id: id })
    let collection = new app.model.Collection({
      cid: goods.id,
      image_path: goods.shopImages,
      name: goods.shopName,
      present_price: goods.shopPrice,
      add_time: +new Date()
    })
    await collection.save()
    ctx.body = {
        msg: '收藏成功'
    }
  }
  // 取消收藏
  async cancelCollection() {
    let { id } = this.ctx.request.body;
    if (!id) {
      this.error('缺少重要参数id')
      return
    }
    let res = await this.ctx.model.Collection.findOneAndRemove({
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
  // 查询收藏
  async getCollection() {
    let collections = await this.ctx.model.Collection.find();
    this.ctx.body = {
      code: 200,
      data: collections
    }
  }
}

module.exports = UserController;
