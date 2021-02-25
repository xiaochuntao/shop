'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async carousel() {
    //查询
    let carousels = await this.ctx.model.Home.find()
    this.ctx.body = {
      data: carousels
    }
  }
}

module.exports = UserController;
