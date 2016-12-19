;(function() {
'use strict';

var _module = {
	"from": {
		"opacity": "0",
		"transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)",
		"animation-timing-function": "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
	},
	"to": {},
	"60%": {
		"opacity": "1",
		"transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)",
		"animation-timing-function": "cubic-bezier(0.175, 0.885, 0.320, 1)"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.zoomInDown = _module;
}
})();