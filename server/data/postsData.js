const database = require('../infra/database.js');

exports.getPosts = function() {
    return database.query('select * from blog.post');
};