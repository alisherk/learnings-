
//this code is written with promises... it is quite verbose 
/* console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

let promiseWifeBringingTickets = new Promise((res, rej) => {
    setTimeout(() => {
        res('ticket');
    }, 2000);
});


let getPopcorn = promiseWifeBringingTickets.then((t) => {
    console.log(`Wife: I got ${t}`);
    console.log('Husb: we should go in');
    console.log('Wife: no I am hungry');

    return new Promise((res, rej) => {

        res('popcorn');

    });

});

let getButter = getPopcorn.then((t) => {
    console.log(`Husb: got ${t} we should go in`);
    console.log('Wife: I need butter on it')

    return new Promise((res, rej) => {

        res('butter')
    });
});

getButter.then((t) => {
    console.log(`Husb: got ${t} lets go in`);
});

console.log('person 4: shows ticket');
console.log('person 5: shows ticket'); */


//lets rewrite it with async and wait 

console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

let preMovie = async() => {

let promiseWifeBringingTickets = new Promise((res, rej) =>{
     setTimeout(() => res('ticket'), 2000); 
}); 

let getPopcorn = new Promise((res, rej) => res('popcorn'));

let getButter = new Promise((res, rej) => res('butter'));

let ticket = await promiseWifeBringingTickets;

console.log('wife: I have the tickets'); 
console.log('husb: we should go in'); 
console.log('wife: no I am hungry');

let popcorn = await getPopcorn; 

console.log(`Wife: I got ${popcorn}`);
console.log('Husb: we should go in');
console.log('Wife: no I am hungry');

let butter = await getButter; 

console.log(`Husb: I got some ${butter}`);
console.log(`Husb: anything else darling`); 
console.log(`Wife: Lets go in`); 

return ticket; 

}

preMovie().then((ticket) => console.log(`person 3: shows ${ticket}`)); 
console.log('person 4: shows ticket');
console.log('person 5: shows ticket'); 


//You can all resolve all the promises at once 

/* console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

let preMovie = async() => {

    let promiseWifeBringingTickets = new Promise((res, rej) =>{
         setTimeout(() => res('ticket'), 2000); 
    }); 
    
    let getPopcorn = new Promise((res, rej) => res('popcorn'));
    
    let getButter = new Promise((res, rej) => res('butter'));

    let getCoke = new Promise((res, rej) => res('coke'));
    
    let ticket = await promiseWifeBringingTickets;

    let [popcorn, butter, coke] = await Promise.all([getPopcorn, getButter, getCoke]); 
    
    console.log(`${popcorn}, ${butter}, ${coke}`);
    return ticket; 
}

preMovie().then((ticket) => console.log(`person 3: shows ${ticket}`)); 


console.log('person 4: shows ticket');
console.log('person 5: shows ticket') */

//error handling in async and await 


/* console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const preMovie = async() => {

    let promiseWifeBringingTickets = new Promise((res, rej) =>{
         setTimeout(() => rej('ticket'), 2000); 
    }); 
    
    let ticket; 
    try {
    
    ticket = await promiseWifeBringingTickets;
    
    } catch(e){

     ticket = 'sad face'; 
    
 }
 
    return ticket; 
}

preMovie().then((ticket) => console.log(`person 3: shows ${ticket}`));  


console.log('person 4: shows ticket');
console.log('person 5: shows ticket') */

