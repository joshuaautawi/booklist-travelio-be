const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = Wishlist;
