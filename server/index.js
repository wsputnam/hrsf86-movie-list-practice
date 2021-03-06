const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var config = require('../lib/movieAPI.js');

// this is the express server as per their docs. already set up upon cloning
app.use(bodyParser.json()); // parses json content
app.use(express.static(path.join(__dirname, '../client/dist')));
// this is where we use our static files?
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

movies = [
		  // {title: 'Mean Girls'},
		  // {title: 'Hackers'},
		  // {title: 'The Grey'},
		  // {title: 'Sunshine'},
		  // {title: 'Ex Machina'},
	    ];

app.route('/movies')
  .get(function(req, res) {
    res.json(movies)
   });

app.route('/movie')
  .post(function(req, res) {
    req.json(req.body)
  });


app.route('/load')
  app.get(function(req, res) {
  	req.get('https://api.themoviedb.org/3/configuration?api_key=af29a1fd92e3ec3f4111aea875ad8350', function(res) {
  		movies.push(res.json());
  	});
  	console.log('response', res);
  });

module.exports = app;

