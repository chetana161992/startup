var express=require("express");
var app=express();
var env=process.env.NODE_ENV=process.env.NODE_ENV || 'production';

var config=require('./server/config/config')[env];
console.log(config);

require('./server/config/express')(app , config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);


app.listen(config.port,function(req,res){
	console.log('listening on port'+ config.port + '....');
});