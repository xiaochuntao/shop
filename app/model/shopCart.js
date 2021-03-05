module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  const ShopCartSchema = new Schema({
    cid: String,    // 商品的id
    present_price: Number,   // 单个商品价格
    image_path: String, // 商品的图片
    name: String,       // 名称
    mallPrice: Number,  // 总价
    add_time: {         // 加入购物车时间
        type: Number,
        default: +new Date(),
    },
    check: {        // 是否选中
        type: Boolean,
        default: false
    },
    count: {        // 商品数量
        type: Number,
        default: 1
    }
  })
  return mongoose.model('ShopCart', ShopCartSchema)
}