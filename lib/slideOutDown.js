;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "translate3d(0, 0, 0)"
	},
	"to": {
		"visibility": "hidden",
		"transform": "translate3d(0, 100%, 0)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.slideOutDown = _module;
}
})();
