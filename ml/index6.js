const brain = require('brain.js'); 


//detecting sentiment 
const trainingData = [
    { input: 'I am super happy!', output: 'happy'}, 
    { input: 'What a pill!', output: 'sarcastic'}, 
    { input: 'I am super unhappy!', output: 'sad'}, 
    { input: 'I am stoked', output: 'excited'}
]; 

const net = new brain.recurrent.LSTM();

net.train(trainingData, {
     iterations: 100, 
     errThresh: 0.011,
}); 

console.log(net.run('I am unhappy')); 