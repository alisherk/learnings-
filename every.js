

const persons= [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];

const isAdmin = (person) => person.type === 'admin';
const isUser = (person) => person.type === 'user';

function logPerson(person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

function filterUsers(persons, criteria){
    return persons.filter(isUser).filter((user) => {
        console.log(user)
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((key) => {
           return user[key] === criteria[key];
        });
    });
}

console.log('Users of age 23:');

/* filterUsers(
    persons,
    {
        occupation: 'Ball', 
        age: 23
       
    }
).forEach(logPerson); */


//var ages = [32, 33, 16, 40];


/* const keys = [40, 1]; 

const result = ages.filter((num) => {
    console.log(num);
   return keys.every(key => {
       console.log(key)
       return num === key
   })
}) */

