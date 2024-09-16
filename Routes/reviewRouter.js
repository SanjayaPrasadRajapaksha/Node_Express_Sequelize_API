const { updateProduct, deleteProduct } = require('../Controller/productController');
const { addReview, getAllReview, getReviewById } = require('../Controller/reviewController');

const router = require('express').Router();


router.post('/addReview', addReview);
router.get('/allReviews', getAllReview);
router.get('/reveiw/:id', getReviewById);


router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


module.exports = router;