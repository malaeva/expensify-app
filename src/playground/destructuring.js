// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Kiev',
//         temp: 88
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if(temperature && city) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Perguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName);


// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '14578'];

// const [, city, state = 'new york'] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (ice)', '$2.00', '$3.50', '$2.75'];
const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
