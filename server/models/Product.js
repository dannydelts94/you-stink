const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.01
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
