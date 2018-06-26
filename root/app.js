//========================================================================
//===========Include node plugin in app js =============//
var express = require('express');
var reload = require('reload');
var path = require('path');
var http = require('http');
// =======Create the app variables for this app js=======//
app = express();
// =============Create the app output port===============//
app.set('port', process.env.PORT || 5035);
// ===define public folder name for this app=============//
app.use(express.static(path.join(__dirname, 'public')));
// =========include view engine==========================//
app.set('view engine', 'ejs');
// =========include view engine file path================//
app.set('views', 'application/views');
// =====include site Controllers file====================//
require('./application/configuration/include_file');
// =====include site configuration file==================//
require('./application/configuration/config');
// ===============create the node server=================//
var server = http.createServer(app);
// ===============run the node server====================//
server.listen(process.env.PORT || app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});
// ===============reload the node server=================//
reload(server, app);
//========================================================================