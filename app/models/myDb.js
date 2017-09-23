//var mongoose   = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017'); // connect to our database

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var albums=[ {name: 'Bholtu',title: 'Bhola', date:'2016-12-21', desc:'albums of Bholtu piya prabhnag',
    				photos: [
    				{
    					filename: "1b.jpg",
    					date:"2016-12-28",
    					desc:"Bhola with baba"

    				},
    				{ 
    					filename: "2b.jpg",
    					date:"2016-12-28",
    					desc:"Bhola with baba"

    				}
    				]
					} ,
    {name: 'Prabh',title: 'Biye', date:'2014-12-07', desc:'albums of \ piya prabhnag',
				photos: [
    				{
    					filename: "3p.jpg",
    					date:"2016-12-28",
    					desc:"Bhola with baba"

    				},
    				{ 
    					filename: "4p.jpg",
    					date:"2016-12-28",
    					desc:"Bhola with baba"

    				}
    				]} ,
    {name: 'Param',title: 'Pakhimama', date:'2016-12-22', desc:'albums of Bholtu piya prabhnag',
    				photos: [
    				{
    					filename: "5b.jpg",
    					date:"2016-12-28",
    					desc:"Bhola with baba"

    				},
    				{ 
    					filename: "6p.jpg",
    					date:"2016-12-28",
    					desc:"Bhola with baba"

    				}
    				]
					} 
    ,{name: 'Piya',title: 'puchkakoli', date:'2014-11-30' ,desc:'albums of piya prabhanjan',
    				photos: [
    				{
    					filename: "7.jpg",
    					date:"2016-12-28",
    					desc:"Bhola with baba"

    				},
    				{ 
    					filename: "8.jpg",
    					date:"2016-12-28",
    					desc:"Bhola with baba"

    				}
    				]

} ];
  db.collection("albums").insertMany(albums, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
