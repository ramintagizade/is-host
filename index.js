/*!
 * Determine if a host is up
 *
 * @author   Ramin Taghizada
 * @license  MIT
 */

var http = require("http");

module.exports  = function pingServer(host,port,cb) {
	var options = {
		method:'GET',
		port:port || '80',
		host:host || 'google.com'
	};
	var req = http.request(options, function(ok){
			if(ok) cb('up');
	});
	req.on('error',function(){
		cb("down");
	});
	req.end();
}
