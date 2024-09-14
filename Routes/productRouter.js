const productController = require('../Controller/productController');

const router = require('express').Router();

router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProduct);

router.get('/published', productController.publishedProducts);


router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);


module.exports = router;

