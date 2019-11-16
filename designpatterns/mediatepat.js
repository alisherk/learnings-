//mediator patters provides central authority through which different components may communicate 
const Participant = function(name) {
    this.name = name; 
    this.chatroom = null; 
};  
Participant.prototype = {
    send(message, to) {
        this.chatroom.send(message, this, to);
    }, 
    receive(message, from) {
        console.log(from.name + ' to ' + this.name + ': ' + message);
    }
}; 

const Chatroom = function() {
    let participants = {};
    return {
        register(participant) {
            participants[participant.name] = participant; 
            participant.chatroom = this;
        }, 
        send(message, from, to) {
            if (to) {
                to.receive(message, from); 
            } else {
                for(key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};
const mike = new Participant('mike'); 
const lani = new Participant('lani'); 
const jeff = new Participant('jeff'); 
const chatroom = new Chatroom(); 
chatroom.register(mike);
chatroom.register(lani); 
chatroom.register(jeff); 

jeff.send('I need a baseline', lani); 

