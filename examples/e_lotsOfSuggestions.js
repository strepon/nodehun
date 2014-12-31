var debugFlag = process.argv.indexOf('debug') > -1;
var nodehun = require('./../build/' + (debugFlag ? 'Debug' : 'Release') + '/nodehun');
var fs = require('fs');
var util = require('util');
var fs = require('fs');
var affbuf = fs.readFileSync(__dirname+'/dictionaries/en_US/en_US.aff');
var dictbuf = fs.readFileSync(__dirname+'/dictionaries/en_US/en_US.dic');

var dict = new nodehun(fs.readFileSync(__dirname+'/dictionaries/en_US/en_US.aff'),fs.readFileSync(__dirname+'/dictionaries/en_US/en_US.dic'));
for(var i = 0; i < 50; i++)
    process.nextTick(function(i){
	dict.spellSuggestions('calor',function(err, a, b){
	    console.log(i, err, a, b);
	});
    }.bind(undefined, i));
