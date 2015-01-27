'use strict';

exports.root={
	name:"Appliance",
	parent:null
};

exports.children=[
require('./appliance-installation'),
require('./appliance-repair')
];