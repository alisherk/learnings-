const fetch = require('node-fetch');

const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3'
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(person => person.json());
  })
)
  .then(arr => {
    console.log('1', arr[0]);
    console.log('2', arr[1]);
    console.log('3', arr[2]);
  })
  .catch(err => console.log(err))
  .finally(console.log('promise finished'));


