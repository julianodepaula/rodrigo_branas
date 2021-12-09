const postsData = require('../data/postsData.js');

exports.getPosts = function() {
    return postsData.getPosts();
};