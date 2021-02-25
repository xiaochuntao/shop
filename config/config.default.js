/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: false
  }

  // 链接数据库
  config.mongoose = {
    //url: 'mongodb://ip:27017/shop',
    url: 'mongodb://localhost:27017/shop'
  }
  // 添加token
  config.jwt = {
    secret: "ylw"//自定义 token 的加密条件字符串
  };
  // 跨域
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*'],
  };
  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // 上传图片
  config.uploadDir = 'app/public/avatar/upload';

  return {
    ...config,
    ...userConfig,
  };
};
