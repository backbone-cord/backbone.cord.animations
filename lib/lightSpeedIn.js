;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "translate3d(100%, 0, 0) skewX(-30deg)",
		"opacity": "0"
	},
	"to": {
		"transform": "none",
		"opacity": "1"
	},
	"60%": {
		"transform": "skewX(20deg)",
		"opacity": "1"
	},
	"80%": {
		"transform": "skewX(-5deg)",
		"opacity": "1"
	},
	"options": {
		"timing": "ease-out"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.lightSpeedIn = _module;
}
})();
