;(function() {
'use strict';

var _module = {
	"from": {
		"opacity": "1"
	},
	"to": {
		"transform": "translate3d(100%, 0, 0) skewX(30deg)",
		"opacity": "0"
	},
	"options": {
		"timing": "ease-in"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.lightSpeedOut = _module;
}
})();
