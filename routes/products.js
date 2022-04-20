var express = require('express');
var router = express.Router();
const {cart,detail} = require ('../controllers/productController')

/* GET users listing. */
router.get('/cart', cart);
router.get ('/detail/:id', detail)

module.exports = router;
