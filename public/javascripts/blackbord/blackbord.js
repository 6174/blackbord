/*! blackbord 1.0.0 2013-08-16 */ define(function(a,b,c){function d(){var a=io.connect("http://localhost");a.on("news",function(b){console.log(b),a.emit("my other event",{my:"data"})})}var e={socket:"socket"};e.init=function(){console.log("init blackbord"),d()},c.exports=e});