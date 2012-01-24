/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();
var io = require('socket.io').listen(app);

var clients=[];
var file={};

io.of('/clients')
.on('connection', function(socket) {
	socket.on('login', function(name) {
		clients.push({
			'name': name
		});
		socket.emit('setFile', file.parse());
	});
	socket.on('newLine', function(lineId) {
		var fileResponse = file.newLine(lineId);
		if(fileResponse.success) {
			socket.emit('newLineSuccess');
		} else {
			socket.emit('newLineFailed');
		}
	});
	socket.on('useLine', function(lineId) {
		
	});
	socket.on('editLine', function(lineId) {
		
	});
	socket.on('removeLine', function(lineId) {
		
	});
	socket.on('getFile', function(lineId) {
		
	});
	
	
	socket.on('');
});


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
