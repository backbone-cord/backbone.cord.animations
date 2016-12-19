;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
		"animation-timing-function": "ease-in",
		"opacity": "0"
	},
	"to": {
		"transform": "perspective(400px)"
	},
	"40%": {
		"transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
		"animation-timing-function": "ease-in"
	},
	"60%": {
		"transform": "perspective(400px) rotate3d(1, 0, 0, 10deg)",
		"opacity": "1"
	},
	"80%": {
		"transform": "perspective(400px) rotate3d(1, 0, 0, -5deg)"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.flipInX = _module;
}
})();
