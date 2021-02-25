module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  const HomeSchema = new Schema({
    carousel: {
      type: Array,
      default: [
        {
        url: 'public/carousel1.jpg'
        },
        {
        url: 'public/carousel2.jpg'
        },
        {
        url: 'public/carousel3.jpg'
        },
        {
        url: 'public/carousel4.jpg'
        },
        {
        url: 'public/carousel5.jpg'
        },
      ]
    },
  })
  return mongoose.model('Home', HomeSchema)
}