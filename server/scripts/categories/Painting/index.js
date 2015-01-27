'use strict';

exports.root = {
  name: "Painting",
  parent: null
}

exports.children = [
  require('./interior-painting'),
  require('./painting'),
  require('./exterior-painting')
];