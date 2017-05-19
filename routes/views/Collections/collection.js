var keystone = require('keystone');
exports = module.exports = function(req, res){

    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'category';

    // locals.data = {
    //     categorie : [],
    // };

    // view.on('init', function(next){

    //     var q = keystone.list('Category').model.find();

    //     q.exec(function(err, results){
    //         locals.data.categories = results;
    //         next(err);
    //     });
    // });

    view.query('categories', keystone.list('Category').model.find().sort('Name'));

    view.render('collections');
};