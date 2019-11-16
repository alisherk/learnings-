
//basic declaration of a promise 
var promise = new Promise((res, rej) => {
    if (true) {

        res('some message');
    }
    else {
        rej('some error')
    }
});

//this is how we can call the promise. Becase resolve is set to true above, this returns then 
promise.then((message) => {
    
    console.log(message);

}).catch((err) => {

        console.log(err);
    });

function http() {
     
    let promise = new Promise((resolve, reject)=>{
    
        setTimeout(() => {

            let data = 'the answer';
            if (data) {
               
                resolve(data)
            
            } else {
    
                reject('there is no data')
            }
    
        }
            , 1000)
    
    }); 
    
    return promise; 

}
//the advantage using the promise is that we can easily handle exceptions 
http('http//google.com', 'GET')
.then((data) => {

    console.log(data);

}).catch((err) => {

    console.log('Catch block ' + err);

}); 


