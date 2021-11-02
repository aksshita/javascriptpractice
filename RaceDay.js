let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let age = 16; 

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}
if (registeredEarly && age > 18) {
  console.log(`Your race will begin at 9:30 am, your race number is: ${raceNumber}.`);
} else if (!registeredEarly && age > 18){
  console.log(`Late adults run at 11:00 am, your race number is: ${raceNumber}.`);
}
if (age < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration), your raceNumber is ${raceNumber}.`);
} else {
  console.log(`You need to see registraton desk`);
}



