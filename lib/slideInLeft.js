;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "translate3d(-100%, 0, 0)",
		"visibility": "visible"
	},
	"to": {
		"transform": "translate3d(0, 0, 0)"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.slideInLeft = _module;
}
})();
