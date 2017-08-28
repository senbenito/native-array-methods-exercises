function multiplyBy10 (array) {
  return array.map(e=>{
    return e*10;
  })
};

function shiftRight (array) {
  return array.map((e,i,a)=>{
    if (i===0) {
      return a[a.length-1];
    }
    return a[i-1]
  })
};

function onlyVowels (array) {
  return array.map(e => {
    return e.replace(/[^aeiou]/gi,"")
  })
};

function doubleMatrix (array) {
  return array.map(innerArray=>{
    return innerArray.map(number=>{
      return number *2;
    })
  })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
