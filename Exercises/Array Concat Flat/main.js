const arrayList = [[1, 2], [3, 4], [5, 6], [7, 7, 9], [10, 11, 12, 13, 14, 15]];
let concatArr = [].concat(...arrayList);


// console.log(concatArr)


// -------------  flat reduce concat
let flatArr = arrayList.reduce((acc, elem) => {
   return acc.concat(elem)
}, []);

// console.log(flatArr)

/// ---------flat ------ spread  --- reduce
function flatAr(arr) {
  return  arr.reduce((acc, elem) => {
      return [...acc, ...elem]
   },[])
}
console.log(flatAr(arrayList))