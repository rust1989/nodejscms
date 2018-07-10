var dns =require('dns');
var net = require('net');
var oldLookup = dns.lookup;
dns.lookup = function (hostname,options,callback) {
    if(typeof options=="function"){
        callback=options;
    }
    dns.resolve(hostname,function (err,result) {
        if(err) return callback(err);
        callback(null,result[0],net.isIP(result[0]));
    });
};
module.exports = function () {

};