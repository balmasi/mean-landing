'use strict';

exports.root ={
	name:"Garage door services",
	parent:null
};

exports.children = [
require('./garage-door-installation'),
require('./garage-door-repair')
];