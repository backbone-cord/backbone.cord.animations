;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
		"animationTimingFunction": "ease-in",
		"opacity": "0"
	},
	"to": {
		"transform": "perspective(400px)"
	},
	"40%": {
		"transform": "perspective(400px) rotate3d(0, 1, 0, -20deg)",
		"animationTimingFunction": "ease-in"
	},
	"60%": {
		"transform": "perspective(400px) rotate3d(0, 1, 0, 10deg)",
		"opacity": "1"
	},
	"80%": {
		"transform": "perspective(400px) rotate3d(0, 1, 0, -5deg)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.flipInY = _module;
}
})();
