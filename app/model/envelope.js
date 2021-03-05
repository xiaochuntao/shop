// 红包
module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
    const EnvelopeSchema = new Schema({
      // 描述
      describe: {
        type: String,
        //required: true
      },
      // 名称
      name: {
        type: String,
        required: true
      },
      // 类型
      types: {
        type: String,
        //required: true
      },
      // 优惠金额
      discountMoney: {
        type: Number,
        //required: true
      },
      // 限领次数
      limit: {
        type: Number,
        // required: true
      },
      // 领取数
      receive: {
        type: Number,
        //required: true
      },
      // 发放数
      grant: {
        type: Number,
        //required: true
      },
      // 使用数
      use: {
        type: Number,
      },
      // 使用门槛
      useThreshold: {
        type: String,
      },
      // 状态
      state: {
        type: Boolean,
        //required: true
      },
      // 是否有效
      effect: {
        type: Boolean
      },
      // 发放开始日期
      grantTime: {
        type: String
      },
      // 发放结束日期
      grantTimeEnd: {
        type: String
      },
      // 使用开始日期
      useTime: {
        type: String
      },
      // 使用截止日期
      useTimeEnd: {
        type: String
      },
      // 图片
      image_path: String,
      add_time: {         // 加入时间
        type: Number,
        default: +new Date(),
      },
    })
    return mongoose.model('Envelope', EnvelopeSchema)
  }