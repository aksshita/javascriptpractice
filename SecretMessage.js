let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log('original array length: '+ secretMessage.length);

// remove last string in the array
secretMessage.pop();
//console.log(secretMessage);
console.log('Updated array length: '+ secretMessage.length);

// add 2 new strings at the end of array
secretMessage.push('to');
secretMessage.push('Program');

//access index of 'easily'
let index = secretMessage.indexOf('easily');
console.log(index);
//replace it with 'right'
secretMessage[7] = 'right';
//console.log(secretMessage);

//remove first string of the array
secretMessage.shift();
//console.log(secretMessage);

//add new string at beginning of the array
secretMessage.unshift('Programming');
//console.log(secretMessage);

secretMessage.splice(secretMessage.indexOf('get'), 5,'know');
//console.log(secretMessage);

console.log(secretMessage.join(' '));
//console.log(secretMessage);
