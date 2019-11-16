
const Subject = function() {
    let observers = []; 
    return {
        subscribeObserver(observer) {
            observers.push(observer); 
        }, 
        unsubscribeObserver(observer) {
            let index = observers.indexOf(observer); 
            if (index > -1) {
                observers.splice(index, 1); 
            }
        }, 
        notifyObserver(observer) {
            let index = observers.indexOf(observer); 
            if (index > -1) {
                observers[index].notify(); 
            }
        }, 
        notifyAllObservers() {
            for (let i = 0; i < observers.length; i++) {
               observers[i].notify(); 
            }
        } 
    }; 
}; 
const Observer = function(number) {
    return {
        notify() {
            console.log(`Observer ${number} is notified!`);
        }
    }
}
const observer1 = new Observer(1); 
const observer2 = new Observer(2); 
const observer3 = new Observer(3); 

const subject = new Subject(); 
subject.subscribeObserver(observer1); 
subject.subscribeObserver(observer2); 
subject.subscribeObserver(observer3); 

console.log(subject.notifyObserver(observer2));
console.log(subject.notifyAllObservers());  






