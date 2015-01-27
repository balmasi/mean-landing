'use strict';
exports.root = {
	name:"Craftswork",
	parent:null
};

exports.children = [
require('./door-installation'),
require('./door-repair'),
require('./window-repair')
];