var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AlbumSchema   = new Schema({
    name: String,
    title: String,
    date: Date,
    desc: String,
    photos: []
});

module.exports = mongoose.model('Album', AlbumSchema);