'use strict';

exports.root ={
	Name:"Garage door services",
	parent:null
};

exports.children = [
require('./Garage-door-installation'),
require('./Garage-door-repair')
];