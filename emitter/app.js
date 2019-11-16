const Emitter = require('events');
const events = require('./config').events; 
const util = require('util'); 


function Greetr() {
	Emitter.call(this); 
	this.greeting = 'Hello world';
}

util.inherits(Greetr, Emitter); 

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data) ; 
	this.emit(events.GREET, data);
}

const greeter1 = new Greetr(); 

greeter1.on('greet', function(data){
    console.log('someone greeted: ' + data);
});

greeter1.greet('Tony')

/* 
const emtr = new Emitter(); 

emtr.on(events.GREET, function() {
   console.log('sowhere, someone said hello')
}); 

emtr.on(events.GREET, function() {
	console.log('A greeting occurred!');
});

emtr.emit('greet'); */

