// 用户所有信息（字段）
// username password email mobile

module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
    const ClassSchema = new Schema({
      className: {
        type: String,
        //required: true
      },
      classLastName: {
        type: String,
        //required: true
      },
      desc: {
        type: Array
      },
    })
    return mongoose.model('Class', ClassSchema)
  }