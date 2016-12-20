;(function() {
'use strict';

var _module = {
	"from": {
		"transform-origin": "center",
		"opacity": "1"
	},
	"to": {
		"transform-origin": "center",
		"transform": "rotate3d(0, 0, 1, 200deg)",
		"opacity": "0"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.rotateOut = _module;
}
})();
