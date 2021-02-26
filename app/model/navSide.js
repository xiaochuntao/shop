module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
    const NavSideSchema = new Schema({
      home: {
        type: String,
        required: true,
        name: '首页',
      },
      shop: {
        type: String,
        //required: true
      },
      active: {
        type: String,
        //required: true
      },
      market: {
        type: String,
        //required: true
      },
      user: {
        type: String,
        //required: true
      },
      order: {
        type: String,
        // required: true
      },
    })
    return mongoose.model('NavSide', NavSideSchema)
  }