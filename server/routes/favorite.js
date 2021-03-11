const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favorites');
const { auth } = require('../middleware/auth');

router.post('/favoriteNumber', auth, favoritesController.favoriteNumber);
router.post('/favorited', auth, favoritesController.favorited);
router.post('/addToFavorite', auth, favoritesController.addToFavorite);
router.post('/removeFromFavorite', favoritesController.removeFromFavorite);
router.post('/getFavoritedMovie', favoritesController.getFavoritedMovie);

module.exports = router;
