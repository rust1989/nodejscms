var express = require('express');
var path = require('path');
var fs = require('fs');
module.exports=function(server,app){
      let dirs=[];
      dirs.push(path.join(__dirname,'/services'));
      dirs.push(path.join(__dirname,'/routes'));
      if(dirs.length){
           dirs.forEach(function(dir){
               fs.readdirSync(dir).forEach(function(file){
                 if(/\.js$/.test(file)){
                   let filename=path.basename(file);
                   filename=filename.replace(/\.js/,'');
                   require(dir+'/'+filename)(server,app);
                 }
               });
           });
      }

}