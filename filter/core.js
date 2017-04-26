function onlyEven (array) {
  let results = array.filter(function (element){
    return element%2 ===0;
  });
  return results;
}

function onlyOneWord (array) {
  let results = array.filter(function(element){
    return !element.includes(" ");
  });
  return results;
}

function positiveRowsOnly (array) {
  let results = array.filter(function (element){
    if (element.sort()[0]>0){
      return element;
    }
  });
  return results;
}

function allSameVowels (array) {
  let results = array.filter(function (element){
    var vowelArray = [];
    for (let i=0; i<element.length; i++){
      if (element[i] === 'a' || element[i] === 'e' || element[i] === 'i' || element[i] === 'o' || element[i] === 'u'){
        vowelArray.push(element[i]);
      }
    }
    for (let j=0; j<vowelArray.length; j++){
      if (vowelArray[j] !== vowelArray[j+1]){
        return;
      } return element;
    }
  });
  return results;
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
