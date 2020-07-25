const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favortieSchema = mongoose.Schema({
  userFrom: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  movidId: {
    type: String,
  },
  movieImage: {
    type: String,
  },
  movieRunTime: {
    type: String,
  },
});

const Favorite = mongoose.model('Favorite', favortieSchema);

module.exports = { Favorite };
