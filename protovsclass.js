
// base object with methods including initialization
var Vehicle = {
  init: function(name) {
    this.name = name;
  },
  start: function() {
    return "engine of "+this.name + " starting...";
  }
}
// delegation link created between sub object and base object
var Car = Object.create(Vehicle);
// sub object method
Car.run = function() {
  console.log("Hello "+ this.start());
};

Car.init = function(type) {
	this.type = type;
}
// instance object with delegation link point to sub object
var c1 = Object.create(Car);
c1.init('Fiesta');
var c2 = Object.create(Car);
c2.init('Baleno');
c1.run();   // "Hello engine of Fiesta starting..."
c2.run();   // "Hello engine of Baleno starting..."


/* function User(email, name) {
		 
			this.email = email 
			this.name = name;

}



/* function Admin(email, name, yearJoined) {//...args defines an array 
  
	//User.call(this, email, name); //admin inherits from user
  this.yearJoined = yearJoined
}  */


//let admin = Object.create(User.prototype); //inherits method defined outside User object
//let admin = new Admin('yahoo', 'mary'); 


/* class User {
    constructor(email, name) {
		this.email = email; 
		this.name = name; 
		this.score = 0; 
	}
	login() {
		console.log(this.email + ' just logged in'); 
		return this; 
	}
	updateScore(){
		  this.score++; 
		  console.log(this.email, 'score is now ', this.score) 
	      return this; 
		}

}

class Admin extends User{
	
	deleteUser(user){
		
		users = users.filter( u => {

              return u.email != user.email; 
		}); 

	}

}

var user1 = new User('ali@yahoo.com', 'Ali'); 
user1.login().updateScore(); 

var user2 = new User('@morn', 'Buffon'); 


var admin = new Admin('@born', 'Aliser');
var users = [user1, user2, admin]; 
admin.deleteUser(user2); 
console.log(users);  */ 

function User(email, name){
 Object.assign(this, {email, name})
};

User.prototype.login = function(){
  console.log(this.email + ' has logged in');
};

function Admin(role, ...args){
	this.role = role;
	User.apply(this, args); 
	
}; 

const admin = new Admin('admin', 'ali@yahoo.com', 'ali'); 
console.log(admin);
