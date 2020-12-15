const brain = require('brain.js'); 

//teach the comp to count 
//1-5, 5-1

const trainData = [
    [1,2,3,4,5 ], 
    [5,4,3,2,1 ], 
]; 

const net = new brain.recurrent.LSTMTimeStep(); 

net.train(trainData);

console.log(net.run([1,2,3,4])); 
console.log(net.run([5,4,3,2])); 
