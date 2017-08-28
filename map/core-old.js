function multiplyBy10 (array) {
  var result = array.map(function (element){
    return element*10;
  });
  return result;
}

function shiftRight (array) {
  return array.map(function (element, index, arr){
    if (index === 0){
      return arr[arr.length-1];
    } return arr[index-1];
  });
}

function onlyVowels (array) {
  var vowels = array.map(function(elem, index) {
    for (let i=0; i<elem.length; i++){
      var elemVowels = '';
    if (elem[i] === 'a' || elem[i] === 'e' || elem[i] === 'i' || elem[i] === 'o' || elem[i] === 'u') {
      elemVowels += elem[i];
    }

  }
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
