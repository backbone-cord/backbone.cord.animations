;(function() {
'use strict';

var _module = {
	"from": {
		"opacity": "0"
	},
	"to": {
		"opacity": "1"
	}
}

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.fadeIn = _module;
}
})();
