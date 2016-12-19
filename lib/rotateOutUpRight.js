;(function() {
'use strict';

var _module = {
	"from": {
		"transform-origin": "right bottom",
		"opacity": "1"
	},
	"to": {
		"transform-origin": "right bottom",
		"transform": "rotate3d(0, 0, 1, 90deg)",
		"opacity": "0"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.rotateOutUpRight = _module;
}
})();