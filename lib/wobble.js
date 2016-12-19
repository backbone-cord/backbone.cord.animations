;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "none"
	},
	"to": {
		"transform": "none"
	},
	"15%": {
		"transform": "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"
	},
	"30%": {
		"transform": "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"
	},
	"45%": {
		"transform": "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"
	},
	"60%": {
		"transform": "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"
	},
	"75%": {
		"transform": "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.wobble = _module;
}
})();
