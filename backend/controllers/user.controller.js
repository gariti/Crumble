const User = require('../models/user.model');

//create
exports.user_create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            isAvailible: req.body.isAvailible,
            price: req.body.price,
        }
    );

    user.save(function (err, doc) {
        if(err) {
            console.log(err);
            return;
       }
       res.send(doc.name + " saved to collection: " + doc.collection.collectionName);
    })
};

//read
exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

//update
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

//delete
exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};