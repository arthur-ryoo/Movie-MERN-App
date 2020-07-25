const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

const { auth } = require('../middleware/auth');

//=================================
//             Favorite
//=================================

router.post('/favoriteNumber', auth, (req, res) => {
  Favorite.find({ movieId: req.body.movieId }).exec((err, favorite) => {
    if (eff) return res.status(400).send(err);
    res.status(200).json({ success: true, FavoriteNumber: favorite.length });
  });
});

module.exports = router;
