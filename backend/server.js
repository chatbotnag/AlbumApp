var express    = require('express');        
var app        = express();  
var path       =require('path');               
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

var port = process.env.PORT || 8080;
var router = express.Router();     

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


var Album= require('../app/models/album');
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","GET, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});
router.route('/albums')
    // create an album (accessed at POST http://localhost:8080/api/albums)
    .post(function(req, res) {

        var album = new Album();      // create a new instance of the Album model
        album.name = req.body.name;  // set the album name (comes from the request)
        album.title = req.body.title; 
        album.date = req.body.date; 
        album.desc = req.body.desc; 
        album.photos = req.body.photos; 
        // save the album and check for errors
        album.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Album created!' });
        });

    })
    .get(function(req, res) {
        Album.find(function(err, albums) {
            if (err)
                res.send(err);

            res.json(albums);
        });
    });


router.route('/albums/:album_name')

   //get a particular album
    .get(function(req, res) {
        Album.find({name: req.params.album_name}, function(err, album) {

            if (err)
                res.send(err);
            res.json(album);
        });

    })
     .put(function(req, res) {

        // use our album model to find the album we want to update
        Album.find({name: req.params.album_name}, function(err, album) {

            if (err)
                res.send(err);

            album.name = req.body.name; 

            // save the album
            album.update(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Album updated!' });
            });

        });
    })
     .delete(function(req, res) {
        Album.remove({
            name: req.params.album_name
        }, function(err, album) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

//register our route
app.use('/api', router);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server starting on port ' + port);

