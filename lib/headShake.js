;(function() {
'use strict';

var _module = {
	"0%": {
		"transform": "translateX(0)"
	},
	"to": {},
	"6.5%": {
		"transform": "translateX(-6px) rotateY(-9deg)"
	},
	"18.5%": {
		"transform": "translateX(5px) rotateY(7deg)"
	},
	"31.5%": {
		"transform": "translateX(-3px) rotateY(-5deg)"
	},
	"43.5%": {
		"transform": "translateX(2px) rotateY(3deg)"
	},
	"50%": {
		"transform": "translateX(0)"
	},
	"options": {
		"timing": "ease-in-out"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.headShake = _module;
}
})();
