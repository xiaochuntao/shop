module.exports = app => {
    let mongoose = app.mongoose;
    let Schema = mongoose.Schema;
    const CarouselSchema = new Schema({
      url: {
        type: String,
        required: true
      },
    })
    return mongoose.model('Carousel', CarouselSchema)
  }