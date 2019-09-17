const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Review = require('./review-model');

const ProductSchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,
    photo:String,
    price:Number,
    cat_id: Number,
    cat_name: String,
    user_id:Number,
    purchaser_id:Number,

  },
  { 
  	timestamps: true,
  	toJSON: { virtuals: true }
  }
);

ProductSchema.virtual('reviews', {
  ref: 'Review', // The model to use
  localField: 'id', 
  foreignField: 'prod_id', 
  justOne: false,
});


module.exports = mongoose.model('Product', ProductSchema);