function reduce(arr, fun, acc){
   arr.forEach((val, i) => {
     acc = fun(acc, val)
   })
   return acc
}
const result = reduce([5, 9, 10], (val, aggr)=> {
   return val + aggr
}, 0);
console.log(result);