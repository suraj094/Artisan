var keystone = require('keystone');
exports = module.exports = function(req, res){

    var view = new keystone.View(req, res);
        var locals = res.locals;

    locals.section = 'Product';


    // view.query('product', keystone.list('Product').model.findOne({prod_name : req.param.productname}));
    view.query('Product', keystone.list('Product').model.findById(req.params.productname));

    view.render('single-product');
};