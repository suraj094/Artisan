var keystone = require('keystone');
var Types = keystone.Field.Types;;

var Category = new keystone.List('Category');

Category.add({
image : {type : String},
Name : { type : String},
link : {type : String},
});

Category.register();