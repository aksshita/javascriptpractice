let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

// str.charAt(i)
for (let i = 0; i < input.length; i++) {
  //console.log('i: '+ i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log('  j: ' + j);
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push(input[i]);
        resultArray.push('e');
      }
      if (input[i] === 'u') {
        resultArray.push(input[i]);
        resultArray.push('u');
      }
      if (input[i] === 'i') {
        resultArray.push(input[i]);
      }

    }
  }
}

const mystr = resultArray.join('').toUpperCase();

console.log(mystr);
