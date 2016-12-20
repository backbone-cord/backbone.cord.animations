;(function() {
'use strict';

var _module = {
	"from": {
		"opacity": "0",
		"transform": "translate3d(100%, 0, 0)"
	},
	"to": {
		"opacity": "1",
		"transform": "none"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.fadeInRight = _module;
}
})();
