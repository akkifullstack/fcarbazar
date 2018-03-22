let express = require('express')
let cors = require('cors')
let app = express()
let path = require('path')
let multer = require('multer')
let bodyParser = require('body-parser')
let slug = require('mongoose-slug-generator');



app.set('port', 8000);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extende:true}));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// call routes here


app.use(function(req, res, next){
	console.log(req.method, req.url)
	next();
})


// executing server port here at defined port above

let server = app.listen(app.get('port'),() => {
	let port = server.address().port;
	console.log("Connected to" + port);
})