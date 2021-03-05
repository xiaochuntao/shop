// 红包
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 添加红包
  async addEnvelope() {
    // 接收前端传递的参数
    let { ctx, app } = this;
    // 添加
    let envelope = new app.model.Envelope(ctx.request.body)
    await envelope.save()
    ctx.body = {
      code: 200,
      msg: '红包添加成功'
    }
  }
  // 查询红包
  async getEnvelope() {
    //查询
    let envelopes = await this.ctx.model.Envelope.find()
    this.ctx.body = {
      data: envelopes
    }
  }
  async changeEnvelope() {
    // 修改
    let { id, name, types, describe, discountMoney, groupWork, limit, receive, grant, use, useThreshold, state, effect, grantTime, grantTimeEnd, useTime, useTimeEnd, image_path } = this.ctx.request.body
    let res = await this.ctx.model.Envelope.findByIdAndUpdate(id, {
      name,
      types,
      describe,
      discountMoney,
      groupWork,
      limit,
      receive,
      grant,
      use,
      useThreshold,
      state,
      effect,
      grantTime,
      grantTimeEnd,
      useTime,
      useTimeEnd,
      image_path
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
  async deleteEnvelope() {
    // 删除
    let { id } = this.ctx.request.body
    let res = await this.ctx.model.Envelope.findOneAndRemove({
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
