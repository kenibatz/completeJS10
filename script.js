'use strict';

// Closures
console.log(`\n*** Closures are preserved variable environments ***`);
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`passengerCount: ${passengerCount}`);
  };
};

const booker = secureBooking();

console.log(``);

booker();
booker();
booker();

console.log(`\nthe booker2 function has its own closure`);
const booker2 = secureBooking();
booker2();
booker();

console.log(`\nClosures cannot be accessed directly, but they can be observed`);
console.dir(booker);
