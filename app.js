var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });


var app = express();
app.enable('trust proxy');

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    // send in a var here representing the url path for form to post to
	res.render('main');
});

app.post('/read', upload.single('filename'), function(req, res, next) {
    res.json(req.file.size + ' bytes');
});


app.listen(port);