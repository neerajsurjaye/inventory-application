let express = require('express')
let router = express.Router()

let categoryController = require('../controller/categoryController')

router.post('/addcategory', categoryController.addCategory)
router.get('/addcategory', categoryController.addPage)
router.get('/:id', categoryController.singleCat)

module.exports = router
