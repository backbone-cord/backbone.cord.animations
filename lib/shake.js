;(function() {
'use strict';

var _module = {
	"from": {
		"transform": "translate3d(0, 0, 0)"
	},
	"to": {
		"transform": "translate3d(0, 0, 0)"
	},
	"10%": {
		"transform": "translate3d(-10px, 0, 0)"
	},
	"30%": {
		"transform": "translate3d(-10px, 0, 0)"
	},
	"50%": {
		"transform": "translate3d(-10px, 0, 0)"
	},
	"70%": {
		"transform": "translate3d(-10px, 0, 0)"
	},
	"90%": {
		"transform": "translate3d(-10px, 0, 0)"
	},
	"20%": {
		"transform": "translate3d(10px, 0, 0)"
	},
	"40%": {
		"transform": "translate3d(10px, 0, 0)"
	},
	"60%": {
		"transform": "translate3d(10px, 0, 0)"
	},
	"80%": {
		"transform": "translate3d(10px, 0, 0)"
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.shake = _module;
}
})();
