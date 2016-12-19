var css  = require('css');
var glob = require('glob');
var fs = require('fs');
var path = require('path');

var dest = 'lib';
var optionsMap = {
	'animation-timing-function': 'timing',
	'animation-delay': 'delay',
	'animation-direction': 'direction',
	'animation-duration': 'duration',
	'animation-fill-mode': 'fill',
	'animation-iteration-count': 'count'
};

var header = ";(function() {\n'use strict';\n\nvar _module = ";
var footer = "\n\nif(typeof define === 'function' && define.amd) {\n\tdefine(_module);\n}\nelse if (typeof exports === 'object') {\n\tmodule.exports = _module;\n}\nelse {\n\twindow.MyModuleName = _module;\n}\n})();\n";

function parseCSS(name, str) {
	var i, j, k, parsed, rules, keyframes, keys, declarations, keyframe;
	var prop, value;
	var animation = {};
	var options = {};
	parsed = css.parse(str);
	rules = parsed.stylesheet.rules;
	for(i = 0; i < rules.length; ++i) {
		if(rules[i].type === 'keyframes') {
			keyframes = rules[i].keyframes;
			for(j = 0; j < keyframes.length; ++j) {
				declarations = keyframes[j].declarations;
				keys = keyframes[j].values;
				keyframe = {};
				for(k = 0; k < declarations.length; ++k)
					keyframe[declarations[k].property] = declarations[k].value;
				for(k = 0; k < keys.length; ++k)
					animation[keys[k]] = Object.assign(animation[keys[k]] || {}, keyframe);
				if(!animation['from'] && !animation['0%'])
					animation.from = {};
				if(!animation['to'] && !animation['100%'])
					animation.to = {};
				if(animation['from'] && animation['0%']) {
					Object.assign(animation['from'], animation['0%']);
					delete animation['0%'];
				}
				if(animation['to'] && animation['100%']) {
					Object.assign(animation['to'], animation['100%']);
					delete animation['100%'];
				}
			}
		}
		else {
			declarations = rules[i].declarations || [];
			for(j = 0; j < declarations.length; ++j) {
				prop = optionsMap[declarations[j].property];
				value = declarations[j].value;
				if(prop)
					options[prop] = value;
			}
		}
	}
	if(Object.keys(options).length)
		animation.options = options;
	return animation;
}

function readFileHandler(name) {
	return function(err, data) {
		var animation = parseCSS(name, data.toString());
		console.log(name);
		fs.writeFile(path.join(dest, name + '.js'), header + JSON.stringify(animation, null, '\t') + footer.replace('MyModuleName', name), function(err) {});
	};
}

function globAnimations(err) {
	glob('node_modules/animate.css*/source/**/*.css', function(err, files) {
		var i, name;
		for(i = 0; i < files.length; ++i) {
			name = path.basename(files[i], '.css');
			if(name[0] === '_')
				continue;
			fs.readFile(files[i], readFileHandler(name));
		}
	});
}

fs.mkdir(dest, globAnimations);
