const express = require('express');
const router = express.Router();
const { submitReview, getReviewsByProduct } = require('../controllers/reviewController');

router.post('/submit', submitReview);
router.get('/product/:id', getReviewsByProduct);

module.exports = router;
