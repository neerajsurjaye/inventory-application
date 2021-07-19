const mongoose = require('mongoose')

let product = require('./models/product')
let category = require('./models/category')


let mongodb = 'mongodb://127.0.0.1:27017/inventory'
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })



let cats = [
    "Household Items",
    "Electornics",
    "Books",
    "Virtual",
    "Furniture",
    "Clothes"
]

// for (let i = 0; i < 5; i++) {
//     cats.push("Temp : " + i)
// }

let items = []
for (let i = 0; i < 20; i++) {
    items.push({
        name: "item " + i,
        manufacturer: "Man " + i,
        stock: i,
        price: i
    })
}



let remove_special = (inp) => {


    let special = ['/', '\\', ' ']
    let out = ''

    for (let i = 0; i < inp.length; i++) {
        let c = inp[i]

        if (!special.includes(c)) {
            out = out + c
        }
        out = out.toLowerCase()
    }
    return out
}


let addCategory = async (cateo) => {


    for (let val in cateo) {
        let cat = cateo[val]
        let newCategory = new category({
            name: cat,
            id: remove_special(cat)
        })

        await newCategory.save((err, result) => {
            console.log("AddCategory :", err, result)
        })
    }
}


let addProd = async () => {
    let dbCats = await category.find({})
    dbCats = dbCats.map((data) => {
        return data._id
    })
    console.log("Categories ID : ", dbCats);

    for (let i in dbCats) {
        for (let j in items) {
            items[j].category = dbCats[i]
        }
        // console.log(items);

        for (let j in items) {
            let prod = new product(items[j])
            await prod.save((err, result) => {
                console.log(err, result);
            })
        }

    }


}


let main = async () => {

    await addCategory(cats)
    console.log("Added Cats");
    await addProd()
}
main()