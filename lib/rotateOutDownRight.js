;(function() {
'use strict';

var _module = {
	"from": {
		"transformOrigin": "right bottom",
		"opacity": "1"
	},
	"to": {
		"transformOrigin": "right bottom",
		"transform": "rotate3d(0, 0, 1, -45deg)",
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
	window.rotateOutDownRight = _module;
}
})();
