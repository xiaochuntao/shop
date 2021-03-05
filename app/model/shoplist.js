module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  const ShopSchema = new Schema({
    /* shopNames: {
      type: String,
      //required: true
    }, */
    shopName: {
      type: String,
      required: true
    },
    shopPrice: {
      type: Number,
      //required: true
    },
    newProduct: {
      type: Boolean,
      //required: true
    },
    recommend: {
      type: Boolean,
      // required: true
    },
    seckill: {
      type: Boolean,
      //required: true
    },
    groupWork: {
      type: Boolean,
      //required: true
    },
    shopNumber: {
      type: Number,
    },
    shopTime: {
      type: Number,
    },
    shopImages: {
      type: String,
      //required: true
    },
    desc: {
      type: Array
    },
    text: {
      type: String
    },
    className: {
      type: String,
    },
    classLastName: {
      type: String,
    },
    integral: {
      type: Number,
    },
    add_time: {         // 加入时间
      type: Number,
      default: +new Date(),
    },
  })
  return mongoose.model('Shoplist', ShopSchema)
}