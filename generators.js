/* function* gen() {
    let x = yield 10; 
    console.log(x);
}

let myGen = gen(); 

console.log(myGen.next()); //this starts up a genarator and stops at 'yield'
console.log(myGen.next()); //this line carries on from 'yield' to 'var x'
 */

 genWrap(function*(){

 const tweets = yield $.get('data/tweets.json'); 
 console.log(tweets);  

 const friends = yield $.get('data/friends.json'); 
 console.log(friends);
 
 const videos = yield $.get('data/friends.json'); 
 console.log(videos);

 }); 

 function genWrap(generator){

    let gen = generator(); 

    function handle(yielded) { //recursive function that calls itself here
        if(!yielded.done) {
           yielded.value.then((data)=>{
                return handle(gen.next(data));
           });
        }
    }

    return handle(gen.next()); 
 }