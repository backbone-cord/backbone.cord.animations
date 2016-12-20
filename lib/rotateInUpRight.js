;(function() {
'use strict';

var _module = {
	"from": {
		"transform-origin": "right bottom",
		"transform": "rotate3d(0, 0, 1, -90deg)",
		"opacity": "0"
	},
	"to": {
		"transform-origin": "right bottom",
		"transform": "none",
		"opacity": "1"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.rotateInUpRight = _module;
}
})();
