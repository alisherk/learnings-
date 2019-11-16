var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlparser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs'); 
app.use('/resources', express.static('resources'));

app.get('/home', (req, res) => {
	res.render('index');
});

app.get('/contact', (req, res) => {
	res.render('contact', {ms:req.query});
});

app.post('/contact', urlparser, (req, res) => {
	res.render('contact-success', {data:req.body});
});

app.get('/profile/:name', (req, res) => {
	var data = {age:29, job: 'PM', hobbies:['eating', 'fighting', 'sleeping']}; 
	res.render('profile', {man: req.params.name, data:data});
});

app.get('/api/endpoint1', (req, res) =>{ 
	res.header('Content-Type', 'application/json')
	var obj = {name:'Ali', job:'PM', age:35}; 
	res.send(JSON.stringify(obj)); 
});

app.get('*', (req, res) => {
	res.render('404'); 
}); 

app.listen(3000); 