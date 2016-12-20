;(function() {
'use strict';

var _module = {
	"20%": {
		"opacity": "1",
		"transform": "translate3d(-20px, 0, 0)"
	},
	"from": {},
	"to": {
		"opacity": "0",
		"transform": "translate3d(2000px, 0, 0)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.bounceOutRight = _module;
}
})();
