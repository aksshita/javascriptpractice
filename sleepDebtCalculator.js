const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
  case "thursday":
    return 7
    break;  
  case "friday":
    return 7;
    break;
  case "saturday":
    return 8;
    break;
  case "sunday":
    return 8;
    break;
  default:
    console.log('invalid entry');
  }
}

//test
var sleep = getSleepHours('monday');
console.log(sleep);
sleep = getSleepHours('wednesday');
console.log(sleep);

const getActualSleepHours = () => {
  var totalSleep = 0;
  totalSleep += getSleepHours('monday');
  totalSleep += getSleepHours('tuesday');
  totalSleep += getSleepHours('wednesday');
  totalSleep += getSleepHours('thursday');
  totalSleep += getSleepHours('friday');
  totalSleep += getSleepHours('saturday');
  totalSleep += getSleepHours('sunday');
  return totalSleep;
};

//Extra:
/*
const getActualSleepHours = () => {
  return 7+7+6+7+7+8+8;
};
*/
/*
const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};*/

// Improvised getIdealSleepHours
const getIdealSleepHours = (custom) => {
  return custom * 7;
};

console.log(`Actual sleep hours: ${getActualSleepHours(7)}.`);
console.log(`Ideal sleep hours: ${getIdealSleepHours(7)}.`);

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(7);
  if (actualSleepHours == idealSleepHours) {
    console.log('you got perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`you got ${actualSleepHours-idealSleepHours} hour extra sleep.`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`you got ${actualSleepHours-idealSleepHours} hour less sleep than you need. You should get some rest.`);
  }
};

calculateSleepDebt();



