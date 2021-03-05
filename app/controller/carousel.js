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
  async changeCarousel() {
    // 修改
    let { id, url } = this.ctx.request.body
    let res = await this.ctx.model.Carousel.findByIdAndUpdate(id, {
      url
    })
    if (res) {
      this.ctx.body = {
        code: 200,
        msg: '修改成功'
      }
    } else {
      this.ctx.body = {
        code: 500,
        msg: '修改失败'
      }
    }
  }
  async deletCarousel() {
    // 删除
    let { id } = this.ctx.request.body
    let res = await this.ctx.model.Carousel.findOneAndRemove({
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
