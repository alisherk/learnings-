const Singleton = (function(){
     //instance stores a ref to the singleton
    let instance; 
    function init() {
        //private methods and vars 
        function privateMethod() {
            console.log('I am private'); 
        }
        let privateVar = 'I am also private';
        let privateRandomNumber = Math.random();

        return {
            publicMethod() {
                console.log('I am public');
            }, 
            publicProperty: 'I am also public', 

            getRandomNumber() {
                return privateRandomNumber;
            }
        }; 
    }; 
       return {
           getInstance() {
               if (!instance) {
                   instance = init();
               }
               return instance; 
           }
        
        };
})();



const singleA = Singleton.getInstance(); 
const singleB = Singleton.getInstance(); 
const singleC = Singleton.getInstance(); 

console.log(singleA.publicMethod()); 
console.log(singleA.publicProperty); 

console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); 
