;(function() {
'use strict';

var _module = {
	"20%": {
		"transform": "scale3d(.9, .9, .9)"
	},
	"from": {},
	"to": {
		"opacity": "0",
		"transform": "scale3d(.3, .3, .3)"
	},
	"50%": {
		"opacity": "1",
		"transform": "scale3d(1.1, 1.1, 1.1)"
	},
	"55%": {
		"opacity": "1",
		"transform": "scale3d(1.1, 1.1, 1.1)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.bounceOut = _module;
}
})();
