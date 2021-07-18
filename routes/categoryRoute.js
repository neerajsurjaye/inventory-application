let express = require('express')
let router = express.Router()
let auth = require('../controller/homeController').auth

let categoryController = require('../controller/categoryController')

router.post('/addcategory', categoryController.addCategory)
router.get('/addcategory', auth, categoryController.addPage)
router.get('/:id', categoryController.singleCat)
router.get('/delete/:id', auth, categoryController.deleteCat)

module.exports = router
