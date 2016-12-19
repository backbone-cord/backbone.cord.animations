;(function() {
'use strict';

var _module = {
	"from": {
		"transform-origin": "left bottom",
		"transform": "rotate3d(0, 0, 1, -45deg)",
		"opacity": "0"
	},
	"to": {
		"transform-origin": "left bottom",
		"transform": "none",
		"opacity": "1"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.rotateInDownLeft = _module;
}
})();
