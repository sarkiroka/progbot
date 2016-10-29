var express = require('express');
var path = require('path');
var app = express();
var clientPath = path.normalize(path.join(__dirname, '..', 'client'));
app.set('views', path.join(clientPath, 'views'));
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(clientPath, 'static')));
app.get('/', function (req, res, next) {
	res.render('index');
});
app.listen(3000,function(){console.log('running...',3000)});
