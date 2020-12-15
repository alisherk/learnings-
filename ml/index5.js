const brain = require('brain.js'); 


const trainingData = [
    'Jane saw Doug.', 
    'Doug saw Jane.', 
    'Spot saw Doug and Jane looking at each other.', 
    'It was love at first sight, and Spot had a frontrow seat.'
]; 

const net = new brain.recurrent.LSTM();

net.train(trainingData, {
     iterations: 1500, 
     errThresh: 0.011,
}); 

console.log(net.run('It was')); 