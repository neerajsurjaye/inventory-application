let express = require('express')
let router = express.Router()

let productsController = require('../controller/productsController')

router.get('/addproducts/:id', productsController.addProd)
router.post('/addproducts/:id', productsController.addProdPost)
router.get('/:id', productsController.getProduct)
router.post('/:id', productsController.updateProduct)
router.get('/delete/:id', productsController.deleteProduct)

module.exports = router