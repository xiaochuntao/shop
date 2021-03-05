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
    code: {
      type: String,
      // required: true
    },
    // 积分
    integral: {
      type: Number,
      default: 0
    },
    // 会员等级
    userClass: {
      type: String,
      default: '青铜会员'
    },
    nickname: { type: String },
    mobile: { type: String },
        email: { type: String },
        gender: {
            type: String,
            default:'男', //默认值
            enum:['男','女','保密']
        },
        avatar: {
            type: String,
            default: 'http://img4.imgtn.bdimg.com/it/u=198369807,133263955&fm=27&gp=0.jpg'
        },
        year:{  // 年
            type: Number,
            default: new Date().getFullYear()
        },
        month:{ // 月
            type: Number,
            default: new Date().getMonth() + 1
        },
        day:{   // 日
            type: Number,
            default: new Date().getDate()
        },
        add_time: { // 时间戳
            type: Number,
            default: +new Date()
        },
  })
  return mongoose.model('User', UserSchema)
}