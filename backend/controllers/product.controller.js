const Product = require('../models/product.model');

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            isAvailible: req.body.isAvailible,
            price: req.body.price,
        }
    );

    product.save(function (err, doc) {
        if(err) {
            console.log(err);
            return;
       }
       res.send(doc.name + " saved to collection: " + doc.collection.collectionName);
    })
};