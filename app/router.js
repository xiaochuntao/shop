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
  // 图形验证码
  router.get('/captcha', controller.user.captcha);

  /* 后台 */

  // 添加后台侧边栏
  router.post('/navSide/addNavSidel', controller.navSide.addNavSidel);
  // 获取侧边栏
  router.get('/navSide', controller.navSide.navSide);
  // 添加商品
  router.post('/shoplist/addShop', controller.shoplist.addshop);
  // 获取商品
  router.get('/shoplist/getShop', controller.shoplist.getShop);
  // 修改商品
  router.post('/shoplist/changeShop', controller.shoplist.changeShop);
  // 删除商品
  router.post('/shoplist/deleteShop', controller.shoplist.deleteShop);
  // 搜索商品
  router.post('/search', controller.shoplist.search);
  // 上传图片/头像/封面
  router.post('/tools/saveavatar', controller.article.saveAvatar);

  // 添加分类参数
  router.post('/class/addClass', controller.class.addClass);
  // 修改分类参数
  router.post('/class/changeClass', controller.class.changeClass);
  // 删除分类参数
  router.post('/class/deleteClass', controller.class.deleteClass);
  // 获取分类参数
  router.get('/getClass', controller.class.getClass);
  // 添加优惠券
  router.post('/addCoupon', controller.coupon.addCoupon);
  // 修改优惠券
  router.post('/changeCoupon', controller.coupon.changeCoupon);
  // 删除优惠券
  router.post('/deleteCoupon', controller.coupon.deleteCoupon);
  // 获取优惠券
  router.get('/getCoupon', controller.coupon.getCoupon);
  // 添加红包
  router.post('/addEnvelope', controller.envelope.addEnvelope);
  // 修改红包
  router.post('/changeEnvelope', controller.envelope.changeEnvelope);
  // 删除红包
  router.post('/deleteEnvelope', controller.envelope.deleteEnvelope);
  // 获取红包
  router.get('/getEnvelope', controller.envelope.getEnvelope);
  
  /* 前台 */

  // 添加轮播图片
  router.post('/carousel/addCarousel', controller.carousel.addCarousel);
  // 修改轮播图
  router.post('/carousel/changeCarousel', controller.carousel.changeCarousel);
  // 删除轮播图
  router.post('/carousel/deletCarousel', controller.carousel.deletCarousel);
  // 获取轮播图
  router.get('/carousel', controller.carousel.carousel);
  // 加入购物车
  router.post('/shopCart/addShopCart', controller.shopCart.addShopCart);
  // 查询购物车
  router.get('/getShopCart', controller.shopCart.getShopCart);
  // 购物车增加减少
  router.post('/shopCart/editCart', controller.shopCart.editCart);
  // 购物车删除
  router.post('/shopCart/deleteShopCart', controller.shopCart.deleteShopCart);
  // 加入收藏
  router.post('/collection', controller.collection.collection);
  // 查询收藏
  router.get('/getCollection', controller.collection.getCollection);
  // 取消收藏
  router.post('/cancelCollection', controller.collection.cancelCollection);
  // 查询订单
  router.get('/getOrder', controller.order.getOrder);
  // 直接购买提交订单
  router.post('/addOrder', controller.order.addOrder);
  // 购物车购买提交订单
  router.post('/order', controller.order.addOrder);
  // 订单删除
  router.post('/deleteOrde', controller.order.deleteOrde);
};
