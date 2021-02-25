'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 登录
  async login() {
    let { ctx, app } = this;
    // 如果给前端返回数据
    // post请求传来的参数
    let { username, password } = ctx.request.body
    let user = await ctx.model.User.findOne({
      username,
      password
    })
    if (user) {
      // 用户存在,生成token
      const token = app.jwt.sign({
        name: user.name,
      }, app.config.jwt.secret);

      ctx.session.user = user;

      ctx.body = {
        code: 200,
        msg: '登录成功',
        data: user,
        token
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '用户名或密码不正确'
      }
    }
    // code msg data ...
  }
  // 注册
  async register() {
    // 接收前端传递的参数
    let { ctx, app } = this;
    let { username } = ctx.request.body
    // 查询有没有当前的信息
    let user = await ctx.model.User.findOne({
      username
    })
    if (user) {
      ctx.body = {
        code: 500,
        msg: '用户已存在'
      }
    } else {
      // 添加
      let user = new app.model.User(ctx.request.body)
      await user.save()
      ctx.body = {
        code: 200,
        msg: '注册成功'
      }
    }
  }
  async user() {
    // 删除
    // let { id } = this.ctx.request.body
    /* let res = await this.ctx.model.User.findOneAndRemove({
      _id: id
    }) */
    /* if (res) {
      this.ctx.body = {
        code: 200,
        msg: '删除成功'
      }
    } else {
      this.ctx.body = {
        code: 500,
        msg: '删除失败'
      }
    } */
    // 修改
    let { id, username } = this.ctx.request.body
    let res = await this.ctx.model.User.findByIdAndUpdate(id, {
      username
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
  async getUser() {
    //查询
    let users = await this.ctx.model.User.find()
    this.ctx.body = {
      data: users
    }
  }
}

module.exports = UserController;
