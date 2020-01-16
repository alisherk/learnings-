const fetch = require('node-fetch');

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async url => {
        const resp = await fetch(url);
        return resp.json();
      })
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('users', albums);
  } catch (err) {
    console.log('oops', err);
  }
};

const getData2 = async function() {
  const arrOfPromises = urls.map(url => fetch(url));
  for await (let req of arrOfPromises) {
    const data = await req.json();
    console.log(data);
  }
};

getData2()
