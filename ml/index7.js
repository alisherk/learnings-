const Brain = require('brain.js'); 

//24 hours = 100k views, 10k comments, 9500 likes let's say we consider this to be a good utube video 

const net = new Brain.NeuralNetwork();

const data = [{input: {v: 1.0, l: 1.0, c: 1.0}, output: {h : 1} }, 
    {input: {v: 0.8, l: 0.75, c: 0.58}, output: {h : 1} },   //80k views, 7500 comments, 5500 like
    {input: {v: 0.85, l: 0.9, c: 0.6}, output: {h : 1} }, 
    {input: {v: 0.2, l: 0.3, c: 0.1}, output: {b : 1} }, 
    {input: {v: 0.1, l: 0.2, c: 0.2}, output: {b : 1} },
    {input: {v: 0.0, l: 0.0, c: 0.0}, output: {b : 1} }
];

net.train(data, {log: true}); 

console.log(net.run({v: 0.0, l:0.1, c:0.1})); 