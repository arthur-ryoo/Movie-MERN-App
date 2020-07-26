const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

const { auth } = require('../middleware/auth');

//=================================
//             Favorite
//=================================

router.post('/favoriteNumber', auth, (req, res) => {
  Favorite.find({ movieId: req.body.movieId }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favoriteNumber: favorite.length });
  });
});

router.post('/favorited', auth, (req, res) => {
  Favorite.find({ movieId: req.body.movieId, userFrom: req.body.userFrom });
  exec((err, favorite) => {
    if (err) return res.status(400).send(err);

    let result = false;
    if (favorite.length !== 0) {
      result = true;
    }
    res.status(200).json({ success: true, favorited: result });
  });
});

module.exports = router;
