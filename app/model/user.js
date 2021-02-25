// 用户所有信息（字段）
// username password email mobile

module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  })
  return mongoose.model('User', UserSchema)
}