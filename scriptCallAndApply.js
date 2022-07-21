'use strict';
// call and apply

// object construction
const tatooine = {
  airline: 'Tatooine',
  iataCode: 'TA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

tatooine.book(458, 'Luke Skywalker');
tatooine.book(765, 'Yoda');

console.log(tatooine.bookings);

const coruscant = {
  airline: 'Coruscant',
  iataCode: 'CO',
  bookings: [],
};

// create a new variable that references the book method of tatooine. this 'book' method will then be used my the other airlines through 'call'
const book = tatooine.book;

//call method
//the book method is called by coruscant object (first argument)
book.call(coruscant, 55, 'Leia Organa');
console.log(coruscant.bookings);

//apply method
//apply uses a data array instead of individual arrays
const flightData = [246, 'Han Solo'];
book.apply(coruscant, flightData);
console.log(coruscant.bookings);

//the call method can handle arrays like the apply method
const flightData2 = [31, 'Chewbacca'];
book.call(coruscant, ...flightData2);
console.log(coruscant.bookings);

//bind method
