;(function() {
'use strict';

var _module = {
	"40%": {
		"opacity": "1",
		"transform": "scale3d(.475, .475, .475) translate3d(42px, 0, 0)"
	},
	"from": {},
	"to": {
		"opacity": "0",
		"transform": "scale(.1) translate3d(-2000px, 0, 0)",
		"transform-origin": "left center"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.zoomOutLeft = _module;
}
})();
