let express = require('express')
let router = express.Router()

let productsController = require('../controller/productsController')

router.get('/addproducts/:id', productsController.addProd)
router.post('/addproducts/:id', productsController.addProdPost)

module.exports = router