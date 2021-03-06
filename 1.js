var express = require('express');
var app = express();
var handlebars = require('express-handlebars')
 .create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 9898);

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
 res.render('home');
});

app.get('/about', function(req, res){
 res.render('about');
});


app.use(function(req, res, next){
 res.status(404);
 res.render('404');
});

app.use(function(err, req, res, next){
 console.error(err.stack);
 res.type('text/plain');
 res.status(500);
 res.render('500');
});

app.listen(app.get('port'), function(){
 console.log( 'STARTED ON http://localhost:' +
 app.get('port') + '  --- STOP - PRESS Ctrl+C' );
}); 
