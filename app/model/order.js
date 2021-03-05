module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  const OrderSchema = new Schema({
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
    },
    status: {                   // 0,待付款 1，待发货 2，待收货 3，评价 4，已完成
    type: Number,
    default: 0
    },
    order_id: String,           // 订单id
    tel: Number,                // 用户电话
    address: String,            // 用户收货地址
    add_time: {                 //  添加订单时间
      type: String,
      default: +new Date()
    },
    mallPrice: Number,           // 总价
    order_list: [
      {
        count: Number,
        uid: String,
        present_price: Number,
        cid: String,
        image_path: String,
        name: String,
        mallPrice: Number,
        order_id: String,
        isComment: {
            type: Boolean,
            default: false
        },   //是否已经评论过了
      }
    ]
  })
  return mongoose.model('Order', OrderSchema)
}