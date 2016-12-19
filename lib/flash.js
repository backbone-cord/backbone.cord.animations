;(function() {
'use strict';

var _module = {
	"from": {
		"opacity": "1"
	},
	"50%": {
		"opacity": "1"
	},
	"to": {
		"opacity": "1"
	},
	"25%": {
		"opacity": "0"
	},
	"75%": {
		"opacity": "0"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.flash = _module;
}
})();
