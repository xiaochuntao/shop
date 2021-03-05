'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 添加优惠券
  async addCoupon() {
    // 接收前端传递的参数
    let { ctx, app } = this;
    // 添加
    let coupon = new app.model.Coupon(ctx.request.body)
    await coupon.save()
    ctx.body = {
      code: 200,
      msg: '优惠券添加成功'
    }
  }
  // 查询商品
  async getCoupon() {
    //查询
    let coupons = await this.ctx.model.Coupon.find()
    this.ctx.body = {
      data: coupons
    }
  }
  async changeCoupon() {
    // 修改
    let { id, name, types, describe, discountMoney, groupWork, limit, receive, grant, use, useThreshold, state, effect, grantTime, grantTimeEnd, useTime, useTimeEnd, image_path } = this.ctx.request.body
    let res = await this.ctx.model.Coupon.findByIdAndUpdate(id, {
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
  async deleteCoupon() {
    // 删除
    let { id } = this.ctx.request.body
    let res = await this.ctx.model.Coupon.findOneAndRemove({
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
