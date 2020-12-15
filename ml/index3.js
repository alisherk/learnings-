const brain = require('brain.js'); 

//hidden layers can be configured 
const network = new brain.NeuralNetwork({hiddenLayers:[2, 2]}); 

//inputs => outputs

//random values 

//activation 
const trainingData = [

    { input: [0, 0], output: [0] }, 
    { input: [0, 1], output: [1] }, 
    { input: [1, 0], output: [1] }, 
    { input: [1, 1], output: [0] }, 
]

network.train(trainingData, {
    log: (err) => console.log(err), 
    logPeriod: 100
}); 

console.log(network.run([1, 1])); 