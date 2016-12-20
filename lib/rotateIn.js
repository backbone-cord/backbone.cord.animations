;(function() {
'use strict';

var _module = {
	"from": {
		"transform-origin": "center",
		"transform": "rotate3d(0, 0, 1, -200deg)",
		"opacity": "0"
	},
	"to": {
		"transform-origin": "center",
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
	window.rotateIn = _module;
}
})();
