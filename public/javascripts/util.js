/*! blackbord 1.0.0 2013-08-29 */ define(function(){var a={};a.guid=function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},a.mix=_.mix,a.proxy=function(a,b){return function(){b.apply(a,arguments)}},a.wrap=function(a,b){var c=a;return function(){var a=Array.prototype.slice.call(arguments);return b.apply(this,[c.bind(this)].concat(a))}},"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),a.Klass=function(a,b){var c,d,e;c=function(){for(var b=c.parent;b;)b.prototype&&b.prototype.hasOwnProperty("__construct")&&b.prototype.__construct.apply(this,arguments),b=b.parent;c.prototype.hasOwnProperty("__construct")&&c.prototype.__construct.apply(this,arguments),this.super=a.prototype},a=a||Object,d=function(){},d.prototype=a.prototype,c.prototype=new d,c.parent=a,c.super=a.prototype,c.prototype.constructor=c;for(e in b)b.hasOwnProperty(e)&&(c.prototype[e]=b[e]);return c}});