;(function() {
'use strict';

var _module = {
	"20%": {
		"transform": "translate3d(0, -10px, 0)"
	},
	"from": {},
	"to": {
		"opacity": "0",
		"transform": "translate3d(0, -2000px, 0)"
	},
	"40%": {
		"opacity": "1",
		"transform": "translate3d(0, 20px, 0)"
	},
	"45%": {
		"opacity": "1",
		"transform": "translate3d(0, 20px, 0)"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.bounceOutUp = _module;
}
})();
