var path = require('path');

var express = require('express');


//Server side React
var React = require('react/addons'),
    Floor = require('./build/mods/floor/index'),
    Cat = require('./build/mods/fs/cat/index'),
    //ReactApp = React.createFactory(Floor),
    ReactApp = React.createFactory(Cat);

var data = require('./mock/data.json');
	

//express
app = express();
var port = 9000;
// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');


app.get('/', function(req, res){
		// React.renderToString takes your component
	    // and generates the markup
	var reactHtml = React.renderToString(ReactApp({floorList:data.floorList}));
	    // Output html rendered by react
		// console.log(myAppHtml);
	res.render('index.ejs', {reactOutput: reactHtml});
})

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
