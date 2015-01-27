'use strict';
exports.root = {
	name:"Carfting",
	parent:null
};

exports.children = [
require('./door-installation'),
require('./door-repair'),
require('./window-repair')
];