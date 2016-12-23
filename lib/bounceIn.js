;(function() {
'use strict';

var _module = {
	"from": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"opacity": "0",
		"transform": "scale3d(.3, .3, .3)"
	},
	"20%": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"transform": "scale3d(1.1, 1.1, 1.1)"
	},
	"40%": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"transform": "scale3d(.9, .9, .9)"
	},
	"60%": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"opacity": "1",
		"transform": "scale3d(1.03, 1.03, 1.03)"
	},
	"80%": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"transform": "scale3d(.97, .97, .97)"
	},
	"to": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"opacity": "1",
		"transform": "scale3d(1, 1, 1)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.bounceIn = _module;
}
})();
