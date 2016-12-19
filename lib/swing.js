;(function() {
'use strict';

var _module = {
	"20%": {
		"transform": "rotate3d(0, 0, 1, 15deg)"
	},
	"from": {},
	"to": {
		"transform": "rotate3d(0, 0, 1, 0deg)"
	},
	"40%": {
		"transform": "rotate3d(0, 0, 1, -10deg)"
	},
	"60%": {
		"transform": "rotate3d(0, 0, 1, 5deg)"
	},
	"80%": {
		"transform": "rotate3d(0, 0, 1, -5deg)"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.swing = _module;
}
})();
