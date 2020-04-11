const Product = require('../models/product.model');

//create
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

//read
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

//update
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

//delete
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};