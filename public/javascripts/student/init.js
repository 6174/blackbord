/*! blackbord 1.0.0 2013-08-21 */ define(function(a,b,c){a.async(["boot.css","util","socketIo","bootstrap","snippet","snippet.css"],function(){$(function(){seajs.use(["blackbord","student","impress"],function(a,b){console.log("haha I am student"),b.init(),$("pre.js").snippet("javascript",{style:"darkness",showNum:!1})})})}),c.exports={haha:"haha"}});