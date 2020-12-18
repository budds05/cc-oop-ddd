const person = require('./domain/person/person.logic');
const personType = require('./domain/personType/personType.logic');

var person1 = new person('Budi Susanto', '7600000341230001', '1981-10-10');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('Object > ');
console.log(person1);
// console.log('\n');
console.log('Weektype: '+ person1.getWeekType());
console.log('Age: '+ person1.getAge());
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');

var personType1 = new personType('Budi Susanto', '7600000341230001', '2001-10-10');
console.log('Object > ');
console.log(personType1);
console.log('Category of Age: '+ personType1.type());
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
