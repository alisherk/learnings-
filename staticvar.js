 function Member(name, id) { //shared static var with basic object creating using function 
     
    this.membername = name; 
    this.id = id; 
    Object.getPrototypeOf(this).userCount++;
   
}

Member.prototype.userCount = 0;


var member1 = new Member(); 
var member2 = new Member(); 
var member3 = new Member(); 


console.log(Member.prototype.userCount + ' members(s) available in the club'); 


class User { //shared static var with basic object creating using function 
    
    constructor(username, email) { 

        this.username = username;
        this.email = email;
        Object.getPrototypeOf(this).userCount++;
  
    }

}

User.prototype.userCount = 0; 

var user1 = new User('Ali', 'ali@yahoo.com'); 
var user2 = new User('Munchie', 'munchie@aol.com'); 

console.log('Any user created can access userCount:' + user1.userCount +' property'); 
console.log('User count property ' + user2.userCount +' is shared'); 
console.log(User.prototype.userCount + ' users(s) are in the Internet cafe');



