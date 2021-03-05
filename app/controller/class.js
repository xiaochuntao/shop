'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 添加参数
  async addClass() {
    // 接收前端传递的参数
    let { ctx, app } = this;
    // 添加
    let className = new app.model.Class(ctx.request.body)
    await className.save()
    ctx.body = {
      code: 200,
      msg: '商品添加成功'
    }
  }
  // 查询参数
  async getClass() {
    //查询
    let classes = await this.ctx.model.Class.find()
    this.ctx.body = {
      data: classes
    }
  }
  async changeClass() {
    // 修改
    let { id, className, classLastName, desc } = this.ctx.request.body
    let res = await this.ctx.model.Class.findByIdAndUpdate(id, {
      className,
      classLastName,
      desc
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
  async deleteClass() {
    // 删除
    let { id } = this.ctx.request.body
    let res = await this.ctx.model.Class.findOneAndRemove({
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
