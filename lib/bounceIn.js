;(function() {
'use strict';

var _module = {
	"from": {
		"animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"opacity": "0",
		"transform": "scale3d(.3, .3, .3)"
	},
	"20%": {
		"animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"transform": "scale3d(1.1, 1.1, 1.1)"
	},
	"40%": {
		"animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"transform": "scale3d(.9, .9, .9)"
	},
	"60%": {
		"animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"opacity": "1",
		"transform": "scale3d(1.03, 1.03, 1.03)"
	},
	"80%": {
		"animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"transform": "scale3d(.97, .97, .97)"
	},
	"to": {
		"animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"opacity": "1",
		"transform": "scale3d(1, 1, 1)"
	}
}

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
