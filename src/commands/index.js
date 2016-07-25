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

/*
 List of Commands
 - generate[g] laravel:resource Todo
 - build template.name
 - create template template.name
 - create library library.name
 - clone library library.name
 - clone template template.name
 - edit library library.name
 - edit template template.name
 - rm library library.name
 - rm template template.name

 */

