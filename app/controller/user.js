'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');
const USERSTR = '_id avatar day gender month username year'

class UserController extends Controller {
  // 登录
  async login() {
    let { ctx, app } = this;
    // 如果给前端返回数据
    // post请求传来的参数
    let { captcha } = ctx.session
    let { username, password, code } = ctx.request.body
    let user = await ctx.model.User.findOne({
      username,
      password,
    })
    if (user) {
      console.log(code, captcha, captcha === code);
      if (captcha && captcha === code) {
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
          msg: '验证码错误或者验证码过期',
        }
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
  async deleteUser() {
    // 删除
    let { id } = this.ctx.request.body
    let res = await this.ctx.model.User.findOneAndRemove({
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
  async changeUser() {
    // 修改
    let { id, integral } = this.ctx.request.body
    let res = await this.ctx.model.User.findByIdAndUpdate(id, {
      integral,
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
  // 用户查询
  async queryUser() {
    let { id } = this.ctx.request.body
    let { ctx, app } = this
    if (!ctx.request.body.id) {
      this.error('缺少重要参数id')
      return
    }
    let userInfo = await this.ctx.model.User.findById(this.ctx.session._id)
    let users = await this.ctx.model.User.findOne({ _id: id })
    let user = new app.model.User({
      cid: users._id,
      username: users.username,
      integral: users.integral,
      userClass: users.userClass,
      password: users.password,
    })
    // await user.save()
    if (!userInfo) {
      // this.error('用户名不存在')
      // return
      this.ctx.body = {
        code: 500,
        msg: '用户名不存在'
      }
    }
    this.ctx.body = {
      code: 200,
      user
    }
  }
  // 图形验证码
  async captcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      ignoreChars: 'OoliABCDEFGHIJKLMNPQRSTUVWXYZ',
      width: 100,
      height: 40,
      noise: 3,
      color: true,
      background: '#cc9966',
    });
    this.ctx.session.captcha = captcha.text;
    //console.log(captcha.text);
    this.ctx.response.type = 'image/svg+xml';
    this.ctx.body = captcha.data;
    // 设置session过期时间
    this.ctx.session.maxAge = 1000 * 60
  }
}
module.exports = UserController;
