;(function() {
'use strict';

var _module = {
	"from": {
		"opacity": "1"
	},
	"to": {
		"opacity": "0",
		"transform": "translate3d(-2000px, 0, 0)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.fadeOutLeftBig = _module;
}
})();
