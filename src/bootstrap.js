#!/usr/bin/env node
require('dotenv').config()
const argv = require('yargs').argv
const argl = argv._.length;

if(argl === 0) {
    require('./main').boot();
} else {
    require('./cli').boot(argv);
}