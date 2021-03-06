;(function() {
'use strict';

var _module = {
	"0%": {
		"transformOrigin": "top left",
		"animationTimingFunction": "ease-in-out"
	},
	"to": {
		"transform": "translate3d(0, 700px, 0)",
		"opacity": "0"
	},
	"20%": {
		"transform": "rotate3d(0, 0, 1, 80deg)",
		"transformOrigin": "top left",
		"animationTimingFunction": "ease-in-out"
	},
	"60%": {
		"transform": "rotate3d(0, 0, 1, 80deg)",
		"transformOrigin": "top left",
		"animationTimingFunction": "ease-in-out"
	},
	"40%": {
		"transform": "rotate3d(0, 0, 1, 60deg)",
		"transformOrigin": "top left",
		"animationTimingFunction": "ease-in-out",
		"opacity": "1"
	},
	"80%": {
		"transform": "rotate3d(0, 0, 1, 60deg)",
		"transformOrigin": "top left",
		"animationTimingFunction": "ease-in-out",
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
	window.hinge = _module;
}
})();
