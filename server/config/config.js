var path = require('path');
var rootPath = path.normalize( __dirname + '/../../');

module.exports = {
	devlopment:{
		db: 'mongodb://localhost:27017/multivision',
		rootPath : rootPath,
		port: process.env.PORT || 4040
	},
	production:{
		db:'mongodb://chetana:chetana@ds021741.mlab.com:21741/chetanadb',
		rootPath: rootPath,
		port: process.env.PORT || 80

	}
}