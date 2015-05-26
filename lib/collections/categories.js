Categories = new Mongo.Collection('categories');

Categories.allow({
    update: function(categoryId, category) { return true; },
    remove: function(categoryId, category) { return true; },
});