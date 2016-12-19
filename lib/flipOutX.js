;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "perspective(400px)"
	},
	"to": {
		"transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
		"opacity": "0"
	},
	"30%": {
		"transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
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
	window.flipOutX = _module;
}
})();
