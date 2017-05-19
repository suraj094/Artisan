var keystone = require('keystone');
var Types = keystone.Field.Types;;

var Roomshot = new keystone.List('Roomshot', {
    autokey: { from: 'title', path: 'slug' },
});

Roomshot.add({
cat_name : {type : String},
images : {type : String},
rs_text : {type : String},
rs_video : {type : String}
});

// Product.schema.virtual('url').get(function() {
// return '/collections/'+this.slug;

// });

Roomshot.register();