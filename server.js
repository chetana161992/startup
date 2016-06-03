var express=require("express");
var app=express();
var env=process.env.NODE_ENV=process.env.NODE_ENV || 'production';

var config=require('./server/config/config')[env];
console.log(config);

app.listen(config.port,function(req,res){
	console.log('listening on port'+ config.port + '....');
});

require('./server/config/routes')(app);
require('./server/config/express')(app , config);
require('./server/config/mongoose')(config);