function onlyEven (array) {
  return array.filter(number=> {
    return number%2===0;
  });
}

function onlyOneWord (array) {
  return array.filter(word=>{
    return !word.includes(" ");
  });
}

function positiveRowsOnly (array) {
  return array.filter(subarray=>{
    if (subarray.sort()[0]>0) return subarray;
  });
}

function allSameVowels (array) {
  return array.filter(word=>{
    let vowelKeeper='';
    for (let i=0; i<word.length; i++){
      // if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
      if (word[i].match(/[aeiou]/)) {
        let vowel=word[i];
        if (vowelKeeper===''){
          vowelKeeper = word[i];
        } else {
          return (vowel===vowelKeeper);
        }
      }
    }
  });
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
