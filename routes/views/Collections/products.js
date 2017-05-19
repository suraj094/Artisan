var keystone = require('keystone');
exports = module.exports = function(req, res){

    var view = new keystone.View(req, res);
    // var locals = res.locals;

    // locals.section = 'product';

    // locals.data = {
    //     products : [],
    // };

    // var Cat_Name = req.params.collectionname;
    // console.log(Cat_Name);

    // view.on('init', function(next){

    //     var q = keystone.list('Product').model.findOne({category : req.params.collectionname});

    //     q.exec(function(err, results){
            
    //             locals.data.Products = results;
            
    //         next(err);
    //     });
    // });

    view.query('products', keystone.list('Product').model.find({cat_name : req.params.collectionname}).sort('prod_name'));
    view.query('Product', keystone.list('Product').model.findOne({'cat_name' : req.params.collectionname}));
    view.query('Roomshot', keystone.list('Roomshot').model.findOne({'cat_name' : req.params.collectionname}));
    view.query('Roomshots', keystone.list('Roomshot').model.find({'cat_name' : req.params.collectionname}));
        

    view.render('products_page');
}


