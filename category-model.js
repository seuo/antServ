var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('./product-model');


var TypeSchema = new Schema(
  {
    id: Number,
    name: String,
  },
  { timestamps: true,
  toJSON: { virtuals: true }
  }
);

TypeSchema.virtual('products', {
  ref: 'Product', // The model to use
  localField: 'id', 
  foreignField: 'cat_id',
  justOne: false,
});


module.exports = mongoose.model('Category', TypeSchema);