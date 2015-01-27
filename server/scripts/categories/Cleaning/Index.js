'use strict';

exports.root = {
  name: "Cleaning",
  parent: null
};

exports.children = [
  require('./carpet-cleaning'),
  require('./cleaning-out'),
  require('./junk-removal'),
  require('./commercial-cleaning'),
  require('./construction-cleanup'),
  require('./gutter-cleaning'),
  require('./pressure-washing'),
  require('./steam-cleaning'),
  require('./window-cleaning'),
  require('./house-cleaning')
];