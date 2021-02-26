'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 登录
  router.post('/user/login', controller.user.login);
  router.post('/user/register', controller.user.register);
  router.post('/user', controller.user.user);
  router.get('/user/user', controller.user.getUser);

  /* 后台 */

  // 添加后台侧边栏
  router.post('/navSide/addNavSidel', controller.navSide.addNavSidel);
  // 获取侧边栏
  router.get('/navSide', controller.navSide.navSide);
  // 添加商品
  router.post('/shoplist/addShop', controller.shoplist.addshop);
  // 获取商品
  router.get('/shoplist/getShop', controller.shoplist.getShop);
  // 上传图片/头像/封面
  router.post('/tools/saveavatar', controller.article.saveAvatar);
  
  /* 前台 */

  // 添加轮播图片
  router.post('/carousel/addCarousel', controller.carousel.addCarousel);
  // 获取轮播图
  router.get('/carousel', controller.carousel.carousel);
  
};
