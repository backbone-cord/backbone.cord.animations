;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "perspective(400px) rotate3d(0, 1, 0, -360deg)",
		"animationTimingFunction": "ease-out"
	},
	"to": {
		"transform": "perspective(400px)",
		"animationTimingFunction": "ease-in"
	},
	"40%": {
		"transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
		"animationTimingFunction": "ease-out"
	},
	"50%": {
		"transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
		"animationTimingFunction": "ease-in"
	},
	"80%": {
		"transform": "perspective(400px) scale3d(.95, .95, .95)",
		"animationTimingFunction": "ease-in"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.flip = _module;
}
})();
