var db = require("../models");

module.exports = {

    newDrink: function(req, res) {
        res.render('add-drink');
    },

    getAll: function() {

        var $findall = db.Drink.findAll({}).then(function(dbResults) {
                return dbResults;
            })
            .catch(function(err) {
                return err;
            });
        return $findall;
    },

    findDrink: function(drink) {

        var $findDrink = db.Drink.findOne({
                where: {
                    drinkName: drink
                }
            }).then(function(dbResults) {
                // We have access to the new todo as an argument inside of the callback function
                return dbResults;
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                return err;
            });
        // This returns a promise to the external code, so it can access our results
        return $findDrink;
    },

    add: function(drink, ingredients, location, user) {

        // create takes an argument of an object for our model
        var $add =
            db.Drink.create({
                drinkName: drink.drinkName,
                isAlcoholic: drink.isAlcoholic,
                isCustom: drink.isCustom,
                placeId: 0,
                createdBy: user.id,
                updatedBy: user.id
                    // ingredients: req.body.ingredients,
                    // location: req.body.location,
            }).then(function(dbResults) {
                // We have access to the new todo as an argument inside of the callback function
                return dbResults;
            })
            .catch(function(err) {

                return err;
            });

        // This returns a promise to the external code, so it can access our results
        return $add;
    },

    edit: function(drink, ingredients, location, user) {

        var $edit =
            db.drink.update({
                drinkName: drink.drinkName,
                type: drink.type,
                createdBy: user.id,
                updatedBy: user.id
                    // ingredients: req.body.ingredients,
                    // location: req.body.location,
            }).then(function(dbResults) {
                return dbResults;
            })
            .catch(function(err) {

                return err;
            });
        return $edit;
    }
}