/*! blackbord 1.0.0 2013-08-29 */ define(function(a,b,c){a("blackbord");var d,e={};e.els={goPreEl:$("#GoPre"),goNextEl:$("#GoNext")},e.init=function(){var a=this;a._socket=d=io.connect("/"),d.on("connect",function(){console.log("connect-success"),d.emit("joinRoom","123456")}),d.on("news",function(a){console.log("----------",a)}),d.on("joinedRoom",function(){console.log("joinRoom success"),d.emit("identify","teacher","123456")}),d.on("identifySuccess",function(){console.log("identifySuccess")}),d.on("identifyFaild",function(){console.log("identifyFaild")})},e.goTo=function(a){return d?(d.emit("goto",a),!0):void 0},e.syn=function(a){var b=this;console.log(a),b.goTo(a)},e.bindNavEvent=function(){var a=this;Reveal.addEventListener("slidechanged",function(){a.syn(Reveal.getIndices())}),Reveal.addEventListener("fragmentshown",function(){a.syn(Reveal.getIndices())}),Reveal.addEventListener("fragmenthidden",function(){a.syn(Reveal.getIndices())})},e.bindNavEvent(),window.teacher=e,c.exports=e});