const express = require('express');
const router = express.Router();
const productController = require('../controlers/product_controler');
const jwt_authenticate = require ("../jwt/autenticate")
const upload = require('../img/storage')

 // Get all products
router.get('/products', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/createProduct',jwt_authenticate.authenticateAdminToken,productController.createProduct);
router.put('/update',jwt_authenticate.authenticateAdminToken, productController.updateProduct);
router.post('/upload', upload.single('img'), productController.upload);
router.delete('/delete',jwt_authenticate.authenticateAdminToken,productController.deleteProduct);
router.get('/images/:name', productController.images);





module.exports = router;