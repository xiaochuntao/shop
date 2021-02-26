'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async addNavSidel() {
    // 接收前端传递的参数
    let { ctx, app } = this;
    // 添加
    let navSide = new app.model.NavSide(ctx.request.body)
    await navSide.save()
    ctx.body = {
      code: 200,
      msg: '添加成功'
    }
  }
  async navSide() {
    //查询
    let navSides = await this.ctx.model.NavSide.find()
    this.ctx.body = {
      code: 200,
      msg: '获取成功',
      //data: navSides,
      data: [
        {
          name: '首页',
          children: [
            {
              name: '轮播图',
              path: '/carousel'
            },
            {
              name: '好评排行',
              path: '/praise'
            },
            {
              name: '新品好物',
              path: '/newProducts'
            },
            {
              name: '推荐',
              path: '/recommend'
            },
          ]
        },
        {
          name: '商品',
          children: [
            {
              name: '商品列表',
              path: '/shopList'
            },
            {
              name: '商品分类',
              path: '/shopClass'
            },
            {
              name: '分类参数',
              path: '/shopParameter'
            },
          ]
        },
        {
          name: '活动',
          children: [
            {
              name: '秒杀活动',
              path: '/seckill'
            },
            {
              name: '拼团活动',
              path: '/groupWork'
            },
          ]
        },
        {
          name: '营销',
          children: [
            {
              name: '优惠券',
              path: '/coupon'
            },
            {
              name: '红包',
              path: '/redEnvelopes'
            },
          ]
        },
        {
          name: '用户管理',
          children: [
            {
              name: '用户列表',
              path: '/userList'
            },
            {
              name: '会员中心',
              path: '/vip'
            },
          ]
        },
        {
          name: '订单管理',
          children: [
            {
              name: '订单列表',
              path: '/order'
            },
          ]
        },
      ]
    }
  }
}

module.exports = UserController;
