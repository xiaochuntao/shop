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
          path: '/',
          icon: 'HomeOutlined'
        },
        {
          name: '管理',
          icon: 'SettingOutlined',
          children: [
            {
              name: '轮播图',
              path: '/carousel',
              icon: 'SwapOutlined'
            },
            {
              name: '新品好物',
              path: '/newProducts',
              icon: 'SmileOutlined'
            },
            {
              name: '推荐',
              path: '/recommend',
              icon: 'ThunderboltOutlined'
            },
          ]
        },
        {
          name: '商品',
          icon: 'ShoppingOutlined',
          children: [
            {
              name: '商品列表',
              path: '/shopList',
              icon: 'ReconciliationOutlined'
            },
            {
              name: '商品分类',
              path: '/shopClass',
              icon: 'QrcodeOutlined'
            },
            {
              name: '分类参数',
              path: '/shopParameter',
              icon: 'ScheduleOutlined'
            },
          ]
        },
        {
          name: '活动',
          icon: 'FireOutlined',
          children: [
            {
              name: '秒杀活动',
              path: '/seckill',
              icon: 'FireOutlined'
            },
            {
              name: '拼团活动',
              path: '/groupWork',
              icon: 'FireOutlined'
            },
          ]
        },
        {
          name: '营销',
          icon: 'DollarOutlined',
          children: [
            {
              name: '优惠券',
              path: '/coupon',
              icon: 'CreditCardOutlined'
            },
            {
              name: '红包',
              path: '/redEnvelopes',
              icon: 'MobileOutlined'
            },
          ]
        },
        {
          name: '用户',
          icon: 'UserOutlined',
          children: [
            {
              name: '用户列表',
              path: '/userList',
              icon: 'TeamOutlined'
            }
          ]
        },
        {
          name: '订单',
          icon: 'ProfileOutlined',
          children: [
            {
              name: '订单列表',
              path: '/order',
              icon: 'ReadOutlined'
            },
          ]
        },
      ]
    }
  }
}

module.exports = UserController;
