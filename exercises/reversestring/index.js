// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Answer 1
// function reverse(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   console.log(revStr);
//   return revStr;
// }

//Answer 2
function reverse(str) {
  let strArr = str.split('');

  return strArr.reverse().join('');
}

module.exports = reverse;
