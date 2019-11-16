function Emitter() {
	this.events = {

	};
}

/* Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
} */

Emitter.prototype.on = function(type, listener) {
	if (!this.events[type]) {
		this.events[type] = []
	}
	this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		this.events[type].forEach(listener => {
			listener();
		});
	}
}

var emtr = new Emitter();

emtr.on('sayGoodBye', () => {
     console.log('good bye');
}); 

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');
emtr.emit('sayGoodBye');

//console.log(emtr.events['greet'][0])

module.exports = Emitter; 


