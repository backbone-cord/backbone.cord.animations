;(function() {
'use strict';

var _module = {
	"from": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"opacity": "0",
		"transform": "translate3d(0, -3000px, 0)"
	},
	"60%": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"opacity": "1",
		"transform": "translate3d(0, 25px, 0)"
	},
	"75%": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"transform": "translate3d(0, -10px, 0)"
	},
	"90%": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
		"transform": "translate3d(0, 5px, 0)"
	},
	"to": {
		"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
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
	window.bounceInDown = _module;
}
})();
