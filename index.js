;(function() {
'use strict';

var _module = {
	"flash": {
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
	},
	"bounce": {
		"from": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(0,0,0)"
		},
		"20%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(0,0,0)"
		},
		"53%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(0,0,0)"
		},
		"80%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(0,0,0)"
		},
		"to": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(0,0,0)"
		},
		"40%": {
			"animationTimingFunction": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
			"transform": "translate3d(0, -30px, 0)"
		},
		"43%": {
			"animationTimingFunction": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
			"transform": "translate3d(0, -30px, 0)"
		},
		"70%": {
			"animationTimingFunction": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
			"transform": "translate3d(0, -15px, 0)"
		},
		"90%": {
			"transform": "translate3d(0,-4px,0)"
		}
	},
	"headShake": {
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
	},
	"jello": {
		"from": {
			"transform": "none"
		},
		"11.1%": {
			"transform": "none"
		},
		"to": {
			"transform": "none"
		},
		"22.2%": {
			"transform": "skewX(-12.5deg) skewY(-12.5deg)"
		},
		"33.3%": {
			"transform": "skewX(6.25deg) skewY(6.25deg)"
		},
		"44.4%": {
			"transform": "skewX(-3.125deg) skewY(-3.125deg)"
		},
		"55.5%": {
			"transform": "skewX(1.5625deg) skewY(1.5625deg)"
		},
		"66.6%": {
			"transform": "skewX(-0.78125deg) skewY(-0.78125deg)"
		},
		"77.7%": {
			"transform": "skewX(0.390625deg) skewY(0.390625deg)"
		},
		"88.8%": {
			"transform": "skewX(-0.1953125deg) skewY(-0.1953125deg)"
		}
	},
	"rubberBand": {
		"from": {
			"transform": "scale3d(1, 1, 1)"
		},
		"to": {
			"transform": "scale3d(1, 1, 1)"
		},
		"30%": {
			"transform": "scale3d(1.25, 0.75, 1)"
		},
		"40%": {
			"transform": "scale3d(0.75, 1.25, 1)"
		},
		"50%": {
			"transform": "scale3d(1.15, 0.85, 1)"
		},
		"65%": {
			"transform": "scale3d(.95, 1.05, 1)"
		},
		"75%": {
			"transform": "scale3d(1.05, .95, 1)"
		}
	},
	"pulse": {
		"from": {
			"transform": "scale3d(1, 1, 1)"
		},
		"to": {
			"transform": "scale3d(1, 1, 1)"
		},
		"50%": {
			"transform": "scale3d(1.05, 1.05, 1.05)"
		}
	},
	"shake": {
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
	},
	"swing": {
		"20%": {
			"transform": "rotate3d(0, 0, 1, 15deg)"
		},
		"from": {},
		"to": {
			"transform": "rotate3d(0, 0, 1, 0deg)"
		},
		"40%": {
			"transform": "rotate3d(0, 0, 1, -10deg)"
		},
		"60%": {
			"transform": "rotate3d(0, 0, 1, 5deg)"
		},
		"80%": {
			"transform": "rotate3d(0, 0, 1, -5deg)"
		}
	},
	"tada": {
		"from": {
			"transform": "scale3d(1, 1, 1)"
		},
		"to": {
			"transform": "scale3d(1, 1, 1)"
		},
		"10%": {
			"transform": "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)"
		},
		"20%": {
			"transform": "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)"
		},
		"30%": {
			"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
		},
		"50%": {
			"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
		},
		"70%": {
			"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
		},
		"90%": {
			"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
		},
		"40%": {
			"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
		},
		"60%": {
			"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
		},
		"80%": {
			"transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
		}
	},
	"wobble": {
		"from": {
			"transform": "none"
		},
		"to": {
			"transform": "none"
		},
		"15%": {
			"transform": "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"
		},
		"30%": {
			"transform": "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"
		},
		"45%": {
			"transform": "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"
		},
		"60%": {
			"transform": "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"
		},
		"75%": {
			"transform": "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"
		}
	},
	"bounceIn": {
		"from": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "0",
			"transform": "scale3d(.3, .3, .3)"
		},
		"20%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "scale3d(1.1, 1.1, 1.1)"
		},
		"40%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "scale3d(.9, .9, .9)"
		},
		"60%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "1",
			"transform": "scale3d(1.03, 1.03, 1.03)"
		},
		"80%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "scale3d(.97, .97, .97)"
		},
		"to": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "1",
			"transform": "scale3d(1, 1, 1)"
		}
	},
	"bounceInDown": {
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
	},
	"bounceInLeft": {
		"from": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "0",
			"transform": "translate3d(-3000px, 0, 0)"
		},
		"60%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "1",
			"transform": "translate3d(25px, 0, 0)"
		},
		"75%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(-10px, 0, 0)"
		},
		"90%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(5px, 0, 0)"
		},
		"to": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "none"
		}
	},
	"bounceInRight": {
		"from": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "0",
			"transform": "translate3d(3000px, 0, 0)"
		},
		"60%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "1",
			"transform": "translate3d(-25px, 0, 0)"
		},
		"75%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(10px, 0, 0)"
		},
		"90%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(-5px, 0, 0)"
		},
		"to": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "none"
		}
	},
	"bounceInUp": {
		"from": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "0",
			"transform": "translate3d(0, 3000px, 0)"
		},
		"60%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"opacity": "1",
			"transform": "translate3d(0, -20px, 0)"
		},
		"75%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(0, 10px, 0)"
		},
		"90%": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(0, -5px, 0)"
		},
		"to": {
			"animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
			"transform": "translate3d(0, 0, 0)"
		}
	},
	"bounceOut": {
		"20%": {
			"transform": "scale3d(.9, .9, .9)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "scale3d(.3, .3, .3)"
		},
		"50%": {
			"opacity": "1",
			"transform": "scale3d(1.1, 1.1, 1.1)"
		},
		"55%": {
			"opacity": "1",
			"transform": "scale3d(1.1, 1.1, 1.1)"
		}
	},
	"bounceOutDown": {
		"20%": {
			"transform": "translate3d(0, 10px, 0)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "translate3d(0, 2000px, 0)"
		},
		"40%": {
			"opacity": "1",
			"transform": "translate3d(0, -20px, 0)"
		},
		"45%": {
			"opacity": "1",
			"transform": "translate3d(0, -20px, 0)"
		}
	},
	"bounceOutLeft": {
		"20%": {
			"opacity": "1",
			"transform": "translate3d(20px, 0, 0)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "translate3d(-2000px, 0, 0)"
		}
	},
	"bounceOutRight": {
		"20%": {
			"opacity": "1",
			"transform": "translate3d(-20px, 0, 0)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "translate3d(2000px, 0, 0)"
		}
	},
	"bounceOutUp": {
		"20%": {
			"transform": "translate3d(0, -10px, 0)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "translate3d(0, -2000px, 0)"
		},
		"40%": {
			"opacity": "1",
			"transform": "translate3d(0, 20px, 0)"
		},
		"45%": {
			"opacity": "1",
			"transform": "translate3d(0, 20px, 0)"
		}
	},
	"fadeIn": {
		"from": {
			"opacity": "0"
		},
		"to": {
			"opacity": "1"
		}
	},
	"fadeInDown": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(0, -100%, 0)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"fadeInDownBig": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(0, -2000px, 0)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"fadeInLeft": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(-100%, 0, 0)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"fadeInLeftBig": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(-2000px, 0, 0)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"fadeInRight": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(100%, 0, 0)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"fadeInRightBig": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(2000px, 0, 0)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"fadeInUp": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(0, 100%, 0)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"fadeInUpBig": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(0, 2000px, 0)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"fadeOut": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0"
		}
	},
	"fadeOutDown": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(0, 100%, 0)"
		}
	},
	"fadeOutDownBig": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(0, 2000px, 0)"
		}
	},
	"fadeOutLeft": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(-100%, 0, 0)"
		}
	},
	"fadeOutLeftBig": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(-2000px, 0, 0)"
		}
	},
	"fadeOutRight": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(100%, 0, 0)"
		}
	},
	"fadeOutRightBig": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(2000px, 0, 0)"
		}
	},
	"fadeOutUp": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(0, -100%, 0)"
		}
	},
	"fadeOutUpBig": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(0, -2000px, 0)"
		}
	},
	"flip": {
		"from": {
			"transform": "perspective(400px) rotate3d(0, 1, 0, -360deg)",
			"animationTimingFunction": "ease-out"
		},
		"to": {
			"transform": "perspective(400px)",
			"animationTimingFunction": "ease-in"
		},
		"40%": {
			"transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
			"animationTimingFunction": "ease-out"
		},
		"50%": {
			"transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
			"animationTimingFunction": "ease-in"
		},
		"80%": {
			"transform": "perspective(400px) scale3d(.95, .95, .95)",
			"animationTimingFunction": "ease-in"
		}
	},
	"flipInX": {
		"from": {
			"transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
			"animationTimingFunction": "ease-in",
			"opacity": "0"
		},
		"to": {
			"transform": "perspective(400px)"
		},
		"40%": {
			"transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
			"animationTimingFunction": "ease-in"
		},
		"60%": {
			"transform": "perspective(400px) rotate3d(1, 0, 0, 10deg)",
			"opacity": "1"
		},
		"80%": {
			"transform": "perspective(400px) rotate3d(1, 0, 0, -5deg)"
		}
	},
	"flipInY": {
		"from": {
			"transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
			"animationTimingFunction": "ease-in",
			"opacity": "0"
		},
		"to": {
			"transform": "perspective(400px)"
		},
		"40%": {
			"transform": "perspective(400px) rotate3d(0, 1, 0, -20deg)",
			"animationTimingFunction": "ease-in"
		},
		"60%": {
			"transform": "perspective(400px) rotate3d(0, 1, 0, 10deg)",
			"opacity": "1"
		},
		"80%": {
			"transform": "perspective(400px) rotate3d(0, 1, 0, -5deg)"
		}
	},
	"flipOutX": {
		"from": {
			"transform": "perspective(400px)"
		},
		"to": {
			"transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
			"opacity": "0"
		},
		"30%": {
			"transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
			"opacity": "1"
		}
	},
	"flipOutY": {
		"from": {
			"transform": "perspective(400px)"
		},
		"to": {
			"transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
			"opacity": "0"
		},
		"30%": {
			"transform": "perspective(400px) rotate3d(0, 1, 0, -15deg)",
			"opacity": "1"
		}
	},
	"lightSpeedIn": {
		"from": {
			"transform": "translate3d(100%, 0, 0) skewX(-30deg)",
			"opacity": "0"
		},
		"to": {
			"transform": "none",
			"opacity": "1"
		},
		"60%": {
			"transform": "skewX(20deg)",
			"opacity": "1"
		},
		"80%": {
			"transform": "skewX(-5deg)",
			"opacity": "1"
		},
		"options": {
			"timing": "ease-out"
		}
	},
	"lightSpeedOut": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"transform": "translate3d(100%, 0, 0) skewX(30deg)",
			"opacity": "0"
		},
		"options": {
			"timing": "ease-in"
		}
	},
	"rotateIn": {
		"from": {
			"transformOrigin": "center",
			"transform": "rotate3d(0, 0, 1, -200deg)",
			"opacity": "0"
		},
		"to": {
			"transformOrigin": "center",
			"transform": "none",
			"opacity": "1"
		}
	},
	"rotateInDownLeft": {
		"from": {
			"transformOrigin": "left bottom",
			"transform": "rotate3d(0, 0, 1, -45deg)",
			"opacity": "0"
		},
		"to": {
			"transformOrigin": "left bottom",
			"transform": "none",
			"opacity": "1"
		}
	},
	"rotateInDownRight": {
		"from": {
			"transformOrigin": "right bottom",
			"transform": "rotate3d(0, 0, 1, 45deg)",
			"opacity": "0"
		},
		"to": {
			"transformOrigin": "right bottom",
			"transform": "none",
			"opacity": "1"
		}
	},
	"rotateInUpRight": {
		"from": {
			"transformOrigin": "right bottom",
			"transform": "rotate3d(0, 0, 1, -90deg)",
			"opacity": "0"
		},
		"to": {
			"transformOrigin": "right bottom",
			"transform": "none",
			"opacity": "1"
		}
	},
	"rotateInUpLeft": {
		"from": {
			"transformOrigin": "left bottom",
			"transform": "rotate3d(0, 0, 1, 45deg)",
			"opacity": "0"
		},
		"to": {
			"transformOrigin": "left bottom",
			"transform": "none",
			"opacity": "1"
		}
	},
	"rotateOut": {
		"from": {
			"transformOrigin": "center",
			"opacity": "1"
		},
		"to": {
			"transformOrigin": "center",
			"transform": "rotate3d(0, 0, 1, 200deg)",
			"opacity": "0"
		}
	},
	"rotateOutUpLeft": {
		"from": {
			"transformOrigin": "left bottom",
			"opacity": "1"
		},
		"to": {
			"transformOrigin": "left bottom",
			"transform": "rotate3d(0, 0, 1, -45deg)",
			"opacity": "0"
		}
	},
	"rotateOutDownLeft": {
		"from": {
			"transformOrigin": "left bottom",
			"opacity": "1"
		},
		"to": {
			"transformOrigin": "left bottom",
			"transform": "rotate3d(0, 0, 1, 45deg)",
			"opacity": "0"
		}
	},
	"rotateOutDownRight": {
		"from": {
			"transformOrigin": "right bottom",
			"opacity": "1"
		},
		"to": {
			"transformOrigin": "right bottom",
			"transform": "rotate3d(0, 0, 1, -45deg)",
			"opacity": "0"
		}
	},
	"rotateOutUpRight": {
		"from": {
			"transformOrigin": "right bottom",
			"opacity": "1"
		},
		"to": {
			"transformOrigin": "right bottom",
			"transform": "rotate3d(0, 0, 1, 90deg)",
			"opacity": "0"
		}
	},
	"slideInDown": {
		"from": {
			"transform": "translate3d(0, -100%, 0)",
			"visibility": "visible"
		},
		"to": {
			"transform": "translate3d(0, 0, 0)"
		}
	},
	"slideInRight": {
		"from": {
			"transform": "translate3d(100%, 0, 0)",
			"visibility": "visible"
		},
		"to": {
			"transform": "translate3d(0, 0, 0)"
		}
	},
	"slideInLeft": {
		"from": {
			"transform": "translate3d(-100%, 0, 0)",
			"visibility": "visible"
		},
		"to": {
			"transform": "translate3d(0, 0, 0)"
		}
	},
	"slideOutLeft": {
		"from": {
			"transform": "translate3d(0, 0, 0)"
		},
		"to": {
			"visibility": "hidden",
			"transform": "translate3d(-100%, 0, 0)"
		}
	},
	"slideOutRight": {
		"from": {
			"transform": "translate3d(0, 0, 0)"
		},
		"to": {
			"visibility": "hidden",
			"transform": "translate3d(100%, 0, 0)"
		}
	},
	"slideOutDown": {
		"from": {
			"transform": "translate3d(0, 0, 0)"
		},
		"to": {
			"visibility": "hidden",
			"transform": "translate3d(0, 100%, 0)"
		}
	},
	"slideInUp": {
		"from": {
			"transform": "translate3d(0, 100%, 0)",
			"visibility": "visible"
		},
		"to": {
			"transform": "translate3d(0, 0, 0)"
		}
	},
	"slideOutUp": {
		"from": {
			"transform": "translate3d(0, 0, 0)"
		},
		"to": {
			"visibility": "hidden",
			"transform": "translate3d(0, -100%, 0)"
		}
	},
	"rollIn": {
		"from": {
			"opacity": "0",
			"transform": "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"
		},
		"to": {
			"opacity": "1",
			"transform": "none"
		}
	},
	"hinge": {
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
	},
	"rollOut": {
		"from": {
			"opacity": "1"
		},
		"to": {
			"opacity": "0",
			"transform": "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"
		}
	},
	"zoomInDown": {
		"from": {
			"opacity": "0",
			"transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)",
			"animationTimingFunction": "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
		},
		"to": {},
		"60%": {
			"opacity": "1",
			"transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)",
			"animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.320, 1)"
		}
	},
	"zoomInRight": {
		"from": {
			"opacity": "0",
			"transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)",
			"animationTimingFunction": "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
		},
		"to": {},
		"60%": {
			"opacity": "1",
			"transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)",
			"animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.320, 1)"
		}
	},
	"zoomIn": {
		"from": {
			"opacity": "0",
			"transform": "scale3d(.3, .3, .3)"
		},
		"to": {},
		"50%": {
			"opacity": "1"
		}
	},
	"zoomInLeft": {
		"from": {
			"opacity": "0",
			"transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)",
			"animationTimingFunction": "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
		},
		"to": {},
		"60%": {
			"opacity": "1",
			"transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)",
			"animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.320, 1)"
		}
	},
	"zoomOutDown": {
		"40%": {
			"opacity": "1",
			"transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)",
			"animationTimingFunction": "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "scale3d(.1, .1, .1) translate3d(0, 2000px, 0)",
			"transformOrigin": "center bottom",
			"animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.320, 1)"
		}
	},
	"zoomInUp": {
		"from": {
			"opacity": "0",
			"transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)",
			"animationTimingFunction": "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
		},
		"to": {},
		"60%": {
			"opacity": "1",
			"transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)",
			"animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.320, 1)"
		}
	},
	"zoomOut": {
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
	},
	"zoomOutLeft": {
		"40%": {
			"opacity": "1",
			"transform": "scale3d(.475, .475, .475) translate3d(42px, 0, 0)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "scale(.1) translate3d(-2000px, 0, 0)",
			"transformOrigin": "left center"
		}
	},
	"zoomOutRight": {
		"40%": {
			"opacity": "1",
			"transform": "scale3d(.475, .475, .475) translate3d(-42px, 0, 0)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "scale(.1) translate3d(2000px, 0, 0)",
			"transformOrigin": "right center"
		}
	},
	"zoomOutUp": {
		"40%": {
			"opacity": "1",
			"transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)",
			"animationTimingFunction": "cubic-bezier(0.550, 0.055, 0.675, 0.190)"
		},
		"from": {},
		"to": {
			"opacity": "0",
			"transform": "scale3d(.1, .1, .1) translate3d(0, -2000px, 0)",
			"transformOrigin": "center bottom",
			"animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.320, 1)"
		}
	}
};

if(typeof define === 'function' && define.amd) {
	define(_module);
}
else if (typeof exports === 'object') {
	module.exports = _module;
}
else {
	window.animations = _module;
}
})();
