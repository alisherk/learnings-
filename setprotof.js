//Object.setPrototypeOf(dOjc, sObj); //lets methods of one object available to another

let toyota = {

    drive() {
        return 'driving toyota'; 
    }
}

let camry = {
    wifi() {
        return 'using wifi'; 
    }
}

//console.dir(camry); 
Object.setPrototypeOf(camry, toyota); 
console.log(camry.drive())

//you can also do this to achieve the same result 
camry.__proto__ = toyota; 