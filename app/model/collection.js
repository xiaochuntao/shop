// 商品收藏表
module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  const CollectionSchema = new Schema({
    cid: String,    // 商品的id
    image_path: String, // 商品的图片
    name: String,       // 名称
    present_price: Number,  // 价格
    add_time: {         // 加入的时间
      type: Number,
      default: +new Date(),
    },
  })
  return mongoose.model('Collection', CollectionSchema)
}