function sum (array) {
  return array.reduce((a,b)=>{
    return a+b;
  })
}


function productAll (array){
  return array.reduce((a,b)=>{
    return a * b.reduce((x,y)=>{
      return x*y;
    }, 1);
  }, 1)
}


// function objectify(array){
//   let results = {};
//   array.reduce((a,b)=>{
//     for (let i=0; i<b.length; i++){
//       results[b[i]]=b[i+1];
//       i++;
//     }
//   },{})
//   return results;
// }

function objectify(array){
  return array.reduce((object,subArray)=>{
    object[subArray[0]]=subArray[1];
    return object;
  },{});
}

function luckyNumbers (array) {
  return array.reduce((a,b, index)=>{
    if (index===array.length-1) {
      return a + `and ${b}`;
    } else {
      return a + `${b}, `;
    }
  },'Your lucky numbers are: ')
}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
