'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20.00', address }) {
    console.log(
      `odrer received! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};



// console.log([...menu.entries()]);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable
 names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the 
DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are Not allowed on board');
  } else {
    console.log('Welcome Aboard');
  }
};

// const capitalization = function (name) {
//   const lowerCase = name.toLowerCase().trim();
//   console.log(lowerCase);
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalization('underscore_case');
// capitalization('  first_name');
// capitalization('Some_Variable');
// capitalization('  calculate_AGE');
// capitalization('delayed_departure');

// // Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Trenton Conner'.split(' '));

// const [firstName, lastName] = 'Trenton Conner'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizateName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizateName('jessica ann smith davis');
// capitalizateName('trenton conner');

// // padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '-').padEnd(30, '+'));
// console.log('Trneton'.padStart(25, '+').padEnd(30, '+'));

// const masksCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4)
//   return last.padStart(str.length, '*')
// };

// console.log(masksCreditCard(423432434234234));
// console.log(masksCreditCard('23432423442342345324'));

// // Repeat
// const message2 = 'Bad weather... All Departues Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} plabes in line ${'H'.repeat(n)}`);
// }

// planesInLine(5);
// planesInLine(12);
// planesInLine(7);

// const airline = 'TAP air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization in name
// const passanger = 'TreNTon'; //Trenton
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// // Commparing emails

// const email = 'hello@trenton.io';
// const loginEmail = '  Hello@Trenton.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Repplacing
// const priceGB = '2088,97^';
// const priceUS = priceGB.replace('^', '$').replace(',' , '.')
// console.log(priceUS);

// const announcement = 'All passener come to barding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('boeing'));
// console.log(plane.startsWith('air'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//   console.log('Part of the new AirBus family');
// } else {
//   console.log('Not part of the new airbus family');
// }

// // Practice exercise
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are Not allowed on board');
//   } else {
//     console.log('Welcome Aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('sock and camera');
// checkBaggage('got some snack and gun for protection')

// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// // Slice is were it starts / ends
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are the middle seat
//   const s = seat.slice(-1)
//   if(s === 'B' || s === 'E') {
//     console.log('you got the middel seat');
//   } else {
//     console.log('You got lucky');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Trenton'));
// console.log(typeof(new String('Trenton').slice(1)));

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card 
from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether 
it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = ['Goal', 'substitution', 'Yellow card', 'red card'];

// //3
// console.log('An event happened, on average, every 9 minutes');

// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[first half] ${key}: ${value}`);
//   } else {
//     console.log(`[second half] ${key}: ${value}`)
//   }
// }

// // MAP

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // MAP with objects
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question ) {
//   if(typeof key === 'number') {
//     console.log(`answer ${key}: ${value}`);
//   }
// }
// const answer = 3
// console.log(answer);

// // if (answer === 3) {
// //   console.log('correct');
// // } else {
// //   console.log('wrong');
// // }

// console.log(question.get(question.get('correct') === answer));

// // Convert map into array
// console.log([...question]);
// // console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// const rest = new Map();
// rest.set('name', 'Chassico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 24;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();

// const arr = [1, 2];
// rest.set([1, 2], 'test');
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entrie object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // Doesn't work very bad
// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRiscotto?.(0,1) ?? 'Method does not exist');

// // Arrays
// const user = [
//   {name: 'Jonas', email: 'hello@jonas.io'}]

// // const user = []

// // Easy way
// console.log(user[0]?.name ?? 'user array empty');
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // Harder way
// if(user.length > 0) console.log(user[0].name);
// else console.log('user array empty');

// console.log(menu);

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   // console.log(item);
//   // console.log(`${item[0] + 1}: ${item[1]} `); BAD WAY
//   console.log(`${i + 1}: ${el} `);
// }

// console.log(...menu.entries());

// const rest1 = {
//   names: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   names: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR assignment operator
// rest1.numGuests = rest2.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // Nullish assignment operator ( null or undefined )
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nulish: null and undefined (Not 0 or '')
// const GuestsCorrect = restaurant.numGuests ?? 10;
// console.log(GuestsCorrect);

// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Trenton');
// console.log('' || 'Trenton');
// console.log(true || 0);
// console.log(null || undefined);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('------ AND -------');
// console.log(0 && 'Jonas');
// console.log('Trenton' && 7);
// console.log('Hello' && 23 && null && 'Trenton');

// //practical example
// if(restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spanach');
// }

// restaurant.orderPizza && restaurant.orderPizza ('mushrooms', 'spanish');

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[2, 3]];

// // Rest, becuasae on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) sum += numbers [i];
// console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7]
// add(...x);

// restaurant.orderPizza('onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // iterables: arrays, strings, maps, sets. Not objects
// const str = 'Trenton';
// const letters = [...str, '', 's'];
// console.log(letters);
// console.log(...str);
// // dosn't work
// // console.log(`${...str} conner`);

// // // real world ex
// // const ingerdients = [
// //   prompt("Let's make pasta! ingredients 1?"),
// //   prompt('ingredients 2'),
// //   prompt('ingredients 3'),
// // ];
// // console.log(ingerdients);

// // restaurant.orderPasta(ingerdients[0], ingerdients[1], ingerdients[2]);

// // restaurant.orderPasta(...ingerdients);

// // objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.names = 'Ristornate Roma';
// console.log(restaurantCopy.names);
// console.log(restaurant.names);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery ({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { names, openingHours, categories } = restaurant;
// console.log(names, openingHours, categories);

// const {
//   names: restaurantName,
//   openingHours: hours,
//   categories: tages,
// } = restaurant;

// console.log(restaurantName, hours, tages);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mautating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// arrays destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switch variables
// // const temp = main;
// // main = secondary;
// // secondary = main;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const[i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //defalut value
// const [p, q , r] = [8, 9];
// console.log(p, q, r);

// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);
// console.log(orderSet);

// console.log(new Set('Trenton'));

// console.log(orderSet.size);
// // HAS
// console.log(orderSet.has('Bread'));
// console.log(orderSet.has('pizza'));
// // ADD and DELETE
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // Example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter'];
// const staffUnique = [...new Set (staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter']).size);

// console.log(new Set('TrentonAndrewConner').size);
