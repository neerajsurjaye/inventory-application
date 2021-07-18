let express = require('express')
let router = express.Router()
let auth = require('../controller/homeController').auth

let productsController = require('../controller/productsController')

router.get('/addproducts/:id', auth, productsController.addProd)
router.post('/addproducts/:id', productsController.addProdPost)
router.get('/:id', auth, productsController.getProduct)
router.post('/:id', productsController.updateProduct)
router.get('/delete/:id', auth, productsController.deleteProduct)

module.exports = router