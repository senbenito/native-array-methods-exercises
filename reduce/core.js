function sum (array) {
  return array.reduce(function(acc, val) {
  return acc + val;
}, 0);
}


function productAll (array){
  var subResult = array.reduce(function(acc, curr) {
  return acc.concat(curr);
  });
  for (let j=0; j<subResult.length; j++){
    if (j===0){
      results = subResult[j];
    } else {
      results *= subResult[j];
    }
  }
return results;
}

// function objectify (array) {
//   console.log(array);
//   results = {};
//   for (let i=0; i<array.length; i++){
//     var innerArray = array[i];
//     for (let j=0; j<innerArray.length-1; j++){
//       results[innerArray[j]] = innerArray[j+1];
//     }
//   }
//   return results;
// }

function objectify(array){
  var results = array.reduce(function (acc, curr){
    acc[curr[0]]=curr[1];
    return acc;
  }, {});
  return results;
}

function luckyNumbers (array) {
// console.log(array);
return array.reduce(function (acc, curr, index){
  console.log(index);
  console.log(acc);
    if (index === 0){
      return acc + curr;
    } else if (index !== array.length-1){
      return acc + ', ' + curr;
    } else {
      return acc + ', and ' + curr;
    }
  }, "Your lucky numbers are: ");
}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
