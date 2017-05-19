/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var url = require('url');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);

	app.get('/aboutus/who-we-our', function(req, res){
		var view = new keystone.View(req, res);
		view.render('wwr')
	});

	app.get('/aboutus/our-vision', function(req, res){
		var view = new keystone.View(req, res);
		view.render('ourvision')
	});

	app.get('/aboutus/our-brands', function(req, res){
		var view = new keystone.View(req, res);
		view.render('ourbrands')
	});

	app.get('/product-info/why-wall-covering', function(req, res){
		var view = new keystone.View(req, res);
		view.render('why-wall')
	});

	app.get('/product-info/Installation', function(req, res){
		var view = new keystone.View(req, res);
		view.render('install')
	});

	app.get('/product-info/Maintenance', function(req, res){
		var view = new keystone.View(req, res);
		view.render('maint')
	});

	app.get('/product-info/Warranty', function(req, res){
		var view = new keystone.View(req, res);
		view.render('warranty')
	});

	app.get('/getintouch', function(req, res){
		var view = new keystone.View(req, res);
		view.render('getintouch')
	});

	app.get('/collections', routes.views.Collections.collection);

	app.get('/collections/:collectionname', routes.views.Collections.products)


	app.get('/search', function(req, res){
		var view = new keystone.View(req, res);
		 	view.query('products', keystone.list('Product').model.find(
		  {$text: {$search : req.query.keywords } },
            {score : {$meta: "textScore"} }).sort({score : {$meta : 'textScore'} }). limit(20)
			
        
       
		);
		view.render('search');
});
	// app.get('/collections/ashford',  routes.views.Collections.products);

	app.get('/collections/:collectionname/filter', function(req, res){
		// var ash_color = req.param('color');
		function ArrToObj(array){
  var Obj = {};
  var len = array.length;
  for (var i = 0; i < len; i+=2){
    if(array[i] == array[i+2]){
      Arr = [array[i+1], array[i+3]];
      Obj[array[i]] = Arr;
      i = i+2;
    }else {
    Obj[array[i]] = array[i+1]
  }
  }
  return Obj;
}
var url = req.url;
a = url.split('?');
b = a[1].split('&');


params = [];
for (var i = 0; i < b.length; i++) {
        var nv = b[i].split(/[=%]/);
        if (nv.length > 2){
        for(var j = 0; j<nv.length; j+=3){
          params.push(nv[j]);
  }
        } else {
          for(var j = 0; j<nv.length; j++){
          params.push(nv[j]);
  }
        }
}

 Obj =  ArrToObj(params);  


 //////////////
function ArrtoFilterarr(array){
  var abc = [];
  var len = array.length;
  for (var i = 0; i < len; i++){
    if(array[i] == array[i+2]){
      abc.push(array[i]);
      Arr = [array[i+1], array[i+3]];
      abc.push(Arr);
      i = i+3;
    }else {
    abc.push(array[i]);
  }
}
return abc;
}

Arry = ArrtoFilterarr(params);
for(i = Arry.length; i < 10 ; i++ ){
		Arry[i] = [null];

}
for(i = 0; i < 10 ; i++ ){
  if (typeof(Arry[i]) != 'object' ){
    Arry[i] = [Arry[i]];
  }
}
Arry.push('cat_name' , req.params.collectionname);
// if(Arr10)

// res.send(b);
		var view = new keystone.View(req, res);
		console.log(params);
		console.log(Arry);
		var arr1 = Arry[0];var arr2 = Arry[1];var arr3 = Arry[2];
		var arr4 = Arry[3];var arr5 = Arry[4];var arr6 = Arry[5];
		var arr7 = Arry[6];var arr8 = Arry[7];var arr9 = Arry[8];
		var arr10 = Arry[9];var arr11 = Arry[10];var arr12 = Arry[11];
				console.log('string');
		view.query('products', keystone.list('Product').model.find({[arr1] : {$in : arr2},[arr3] : {$in : arr4}, [arr5] : {$in : arr6},[arr7] : {$in : arr8},[arr9] : {$in : arr10},[arr11] : {$in : [arr12]}}));		
		// view.query('products', keystone.list('Product').model.find({[arr1] : {$in : [arr2]},[arr3] : {$in : [arr4]}, [arr5] : {$in : [arr6]},[arr7] : {$in : [arr8]},[arr9] : {$in : [arr10]},[arr11] : {$in : [arr12]}}));		
		// }
	// } else {
	// 	console.log('object');
	// 	view.query('products', keystone.list('Product').model.find({[arr1] : {$in : arr2}}));
	// }
		
		view.query('Product', keystone.list('Product').model.findOne({'cat_name' : req.params.collectionname}));
		view.query('Roomshot', keystone.list('Roomshot').model.findOne({'cat_name' : req.params.collectionname}));
    view.query('Roomshots', keystone.list('Roomshot').model.find({'cat_name' : req.params.collectionname}));
		view.render('products_page')
	});

	app.get('/products/:productname', routes.views.Collections.single_product);
// app.get('/products/:productname', function(req, res){
// 	res.send("id : ");
// });
	
	

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
