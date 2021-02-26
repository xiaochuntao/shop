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
      required: true
    },
    shopAt1: {
      type: String,
      //required: true
    },
    shopAt2: {
      type: String,
     // required: true
    },
    shopAt3: {
      type: String,
      //required: true
    },
    shopNumber: {
      type: Number,

    },
    shopTime: {
      type: String,
    },
    shopImages: {
      type: String,
      //required: true
    },
  })
  return mongoose.model('Shoplist', ShopSchema)
}