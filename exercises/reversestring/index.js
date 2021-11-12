// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution 1
// function reverse(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   console.log(revStr);
//   return revStr;
// }

//Solution 2
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

//Solution 3
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   console.log(reversed);
//   return reversed;
// }
function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

module.exports = reverse;
