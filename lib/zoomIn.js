;(function() {
'use strict';

var _module = {
	"from": {
		"opacity": "0",
		"transform": "scale3d(.3, .3, .3)"
	},
	"to": {},
	"50%": {
		"opacity": "1"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.zoomIn = _module;
}
})();
