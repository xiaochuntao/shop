'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async addCarousel() {
    // 接收前端传递的参数
    let { ctx, app } = this;
      // 添加
    let carousel = new app.model.Carousel(ctx.request.body)
    await carousel.save()
    ctx.body = {
      code: 200,
      msg: '添加成功'
    }
  }
  async carousel() {
    //查询
    let carousels = await this.ctx.model.Carousel.find()
    this.ctx.body = {
      data: carousels
    }
  }
}

module.exports = UserController;
