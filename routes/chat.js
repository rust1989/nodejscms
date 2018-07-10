var Stomp=require("stomp-client");
var topic='/topic/jackytest';
module.exports=function(server,app){
  var client = new Stomp('127.0.0.1', 61613, 'admin', 'admin');
  client.connect(function(sessionId){
        client.subscribe(topic,function(body,headers){
               console.log('From Mq:');
               console.log(body);
        });
        client.publish(topic,'Hello world!');
  });
}