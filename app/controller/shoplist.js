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
    let shoplists = await this.ctx.model.Shoplist.find()
    this.ctx.body = {
      data: shoplists
    }
  }
  // 查询商品详情
  async getShopD() {
    let { id } = this.ctx.request.body
    let { ctx, app } = this
    if (!ctx.request.body.id) {
      this.error('缺少重要参数id')
      return
    }
    let shoplists = await this.ctx.model.Shoplist.findOne({ _id: id })
    let shoplist = new app.model.Shoplist({
      shopName: shoplists.shopName,
      shopPrice: shoplists.shopPrice,
      newProduct: shoplists.newProduct,
      recommend: shoplists.recommend,
      seckill: shoplists.seckill,
      groupWork: shoplists.groupWork,
      shopNumber: shoplists.shopNumber,
      shopTime: shoplists.shopTime,
      shopImages: shoplists.shopImages,
      desc: shoplists.desc,
      text: shoplists.text,
      className: shoplists.className,
      classLastName: shoplists.classLastName,
      integral: shoplists.integral,
      cid: shoplists.id,
    })
    this.ctx.body = {
      data: shoplist,
      code: 200,
    }
  }
  async changeShop() {
    // 修改
    let { id, shopName, newProduct, recommend, seckill, groupWork, shopPrice, shopNumber, shopImages, desc, text, className, classLastName } = this.ctx.request.body
    let res = await this.ctx.model.Shoplist.findByIdAndUpdate(id, {
      shopName,
      newProduct,
      recommend,
      seckill,
      groupWork,
      shopPrice,
      shopNumber,
      shopImages,
      desc,
      text,
      className,
      classLastName,
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
  async deleteShop() {
    // 删除
    let { id } = this.ctx.request.body
    let res = await this.ctx.model.Shoplist.findOneAndRemove({
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
  // 搜索
  async search() {
    let { value } = this.ctx.request.body
    if (!value) {
      this.error('缺少参数value')
      return
    }
    let pageSize = 20
    let page = this.ctx.request.body.page || 1
    let skip = (page - 1) * pageSize
    const count = await this.ctx.model.Shoplist.find({ 'shopName': { $regex: value } }).countDocuments()
    const list = await this.ctx.model.Shoplist.find({ 'shopName': { $regex: value } }).skip(skip).limit(pageSize)
    this.ctx.body = {
      code: 200,
      data: {
        list,
        count
      }
    }
  }
}

module.exports = UserController;
