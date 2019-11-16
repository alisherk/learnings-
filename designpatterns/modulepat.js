const animal = (function(){

    let _type = ''; 
    let _id = 0; 

    return {
        generateID() {
            return 'cutomId' + _id++; 
        }, 
        createAnimal(animal) {
            
            if(!animal) {
                
               throw new Error('animal name must be supplied'); 
            }
            return _type = animal; 

        }
    }

})(); 

const animal1 = animal.generateID();
const animal2 = animal.generateID(); 


