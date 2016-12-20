;(function() {
'use strict';

var _module = {
	"from": {
		"opacity": "1"
	},
	"to": {
		"opacity": "0"
	},
	"50%": {
		"opacity": "0",
		"transform": "scale3d(.3, .3, .3)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.zoomOut = _module;
}
})();
