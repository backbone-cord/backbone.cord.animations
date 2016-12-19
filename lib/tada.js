;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "scale3d(1, 1, 1)"
	},
	"to": {
		"transform": "scale3d(1, 1, 1)"
	},
	"10%": {
		"transform": "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)"
	},
	"20%": {
		"transform": "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)"
	},
	"30%": {
		"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
	},
	"50%": {
		"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
	},
	"70%": {
		"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
	},
	"90%": {
		"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
	},
	"40%": {
		"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
	},
	"60%": {
		"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
	},
	"80%": {
		"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.tada = _module;
}
})();
