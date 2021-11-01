// my age in human years
const myAge = 20;
var earlyYears = 2;
// my 2 years in dog years
earlyYears *= 10.5;

var laterYears = myAge - 2;
// my 18 years in dog years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// my age in dog years
const myAgeInDogYears = earlyYears + laterYears;

myName = 'Ellie'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which ${myAgeInDogYears} years old in dog years.`);
