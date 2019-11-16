var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//ajax get with Vanilla JS
const getPosts = () => {
  
    let http = new XMLHttpRequest(); 
     
    //listening for states 
    http.onreadystatechange = () => {
       if(http.readyState == 4 && http.status ==200) {
           console.log(JSON.parse(http.responseText))
       }
    }


    http.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);
    http.send(); 
    console.log(http); 
} 

//getPosts();

//ajax post with vanilla js 


const makePost = post => {

    let http = new XMLHttpRequest(); 
    
    
    //listening for states 
    http.onreadystatechange = () => {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
     }

     http.open('POST', 'http://jsonplaceholder.typicode.com/posts', true)
     http.setRequestHeader('Content-type', 'application/json');
     http.send(JSON.stringify(post));
  
}

const post = {
    title: 'All about fetch', 
    body: 'Fetch is cool', 
    userid: 1
}

makePost(post)


/* READY STATES 
0 - req is not initialized 
2 - req has been sent 
3 - request is in progress 
4 - request is complete 
*/

