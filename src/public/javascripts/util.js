/**
 * -- define util module
 * -- @author xuejia.cxj
 */
define(function(require, exports, module) {
	var util = {};
	util.guid = function() {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	};
	
	/**
	 * proxy
	 */
	util.proxy = function(context, func) {
		return function() {
			func.apply(context, arguments);
		}
	};

	/**
	 * function wraper
	 */
	util.wrap = function(func, wrapper) {
		var __method = func;
		return function() {
			var args = Array.prototype.slice.call(arguments);
			return wrapper.apply(this, [__method.bind(this)].concat(args));
		}
		/*
		     eg:
		     f=wrap(f, function(org,x,y){
		         console.log("x:"+x,"y:"+y);
		          var r=org(x,y);
		          console.log("result:"+r);
		       });
		     */
	};


	if (typeof Object.create !== "function") {
		Object.create = function(o) {
			function F() {}
			F.prototype = o;
			return new F();
		};
	}

	/**
	 *Klass 语法糖
	 */
	util.Klass = function(Parent, props) {
		var Child, F, i;

		Child = function() {
			var parent = Child.parent;
			while(parent){
				parent.prototype && parent.prototype.hasOwnProperty("__construct") && parent.prototype.__construct.apply(this, arguments);
				parent = parent.parent;
			}
			if (Child.prototype.hasOwnProperty("__construct")) {
				Child.prototype.__construct.apply(this, arguments);
			}
			this.super = Parent.prototype;
		};

		Parent = Parent || Object;
		F = function() {};
		F.prototype = Parent.prototype;
		Child.prototype = new F();
		Child.parent = Parent;
		Child.super = Parent.prototype;
		Child.prototype.constructor = Child;

		for (i in props) {
			if (props.hasOwnProperty(i)) {
				Child.prototype[i] = props[i];
			}
		}

		return Child;
	}
});