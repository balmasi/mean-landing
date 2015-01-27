'use strict';

exports.root = {
  name: "Cleaning",
  parent: null
};

exports.children = [
  require('./carpet-cleaning'),
  require('./cleaning-out'),
  require('./junk-removal')
];