var mongoose = require('mongoose');
var gracefulShutdown;

// define database connection string
var dbURI = 'mongodb://localhost/hostfam';
// open a mongoose connection at application startup
// mongoose.connect(dbURI);
var promise = mongoose.connect(dbURI, {
	useMongoClient: true,
});

// monitor connection status
mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

// monitor Node process events so we can close Mongoose connection
// when the application ends
//For nodemon restarts
process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});
// For app termination
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});
// For Heroku app termination
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function() {
		process.exit(0);
	});
});