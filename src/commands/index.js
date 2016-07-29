#!/usr/bin/env node

var
  _ = require('lodash'),
  fs = require('fs-plus'),
  path = require('path'),
  plugins = fs.listSync(__dirname + '/../../plugins'),
  program = require('commander');

program.version('0.0.1');


plugins.forEach(function (dir) {
  if (fs.isDirectorySync(dir)) {
    var plugin = require(dir);
    plugin.init();
  }
});
program.parse(process.argv);


if (!process.argv.slice(2).length) {
  program.outputHelp();
}

