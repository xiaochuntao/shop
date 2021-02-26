'use strict';

const Controller = require('egg').Controller;
const goods = require('../data/goods');

class UserController extends Controller {
  // 添加商品
  async addshop() {
    // 接收前端传递的参数
    let { ctx, app } = this;
    // 添加
    let shopList = new app.model.Shoplist(ctx.request.body)
    await shopList.save()
    ctx.body = {
      code: 200,
      msg: '商品添加成功'
    }
  }
  // 查询商品
  async getShop() {
    //查询
    /* let shoplists = await this.ctx.model.Shoplist.find()
    this.ctx.body = {
      data: shoplists
    } */
    this.ctx.body = {
      code: 200,
      msg: 'success',
      data: goods
    }
  }
}

module.exports = UserController;
