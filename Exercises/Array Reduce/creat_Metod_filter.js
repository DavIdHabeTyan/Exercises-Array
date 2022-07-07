function reduceFilter(arr, fun, agr){
   arr.forEach((val, i) => {
      if(i === 0 && agr === undefined){
         agr = val
      } else {
         agr = fun(agr,val);
      }
   })
   return agr
}

let result = reduceFilter([1, 2, 5, 234, 123], ((val, agr) => {
   return Math.max(agr, val)
}),0)
console.log(result)