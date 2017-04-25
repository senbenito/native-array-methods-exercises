function multiplyBy10 (array) {
  var result = array.map(function (element){
    return element*10;
  });
  return result;
}

function shiftRight (array) {
  return array.map(function (element, i, arr){
    if (i === 0){
      return arr[arr.length-1];
    } return arr[i-1];
  });
}

function onlyVowels (array) {
  var vowels = array.map(function(elem, index) {
    if (elem === 'a' || elem === 'e' || elem === 'i' || elem === 'o' || elem === 'u'){
      return elem;
    } return 'not a vowel'
  }); return vowels;
}

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
