var express = require('express');
var router = express.Router();
const {cart,detail, getByCategory,} = require ('../controllers/productController')

/* GET users listing. */
router.get('/cart', cart);
router.get ('/detail/:id', detail)
router.get('/category/:idCategory/:idProduct?',getByCategory)

module.exports = router;
 