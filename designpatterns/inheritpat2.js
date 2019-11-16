var util = require('util');

function Person(firstname, lastname) {
	this.firstname = firstname
	this.lastname = lastname;
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman(firstname, lastname) {
	Person.call(this, firstname, lastname); 
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman('Tony', 'Stark');
officer.greet();