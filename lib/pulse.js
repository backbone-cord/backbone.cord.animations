;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "scale3d(1, 1, 1)"
	},
	"to": {
		"transform": "scale3d(1, 1, 1)"
	},
	"50%": {
		"transform": "scale3d(1.05, 1.05, 1.05)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.pulse = _module;
}
})();
