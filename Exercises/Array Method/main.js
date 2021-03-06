// 3) Turn an array of voter objects into a count of how many people voted


// ---------- filter ----- find ( voted:true  ) value;
function totalVotes(arr) {
   let result = arr.filter(elem => {
      return elem.voted === true;
   })
   return result.length

}

const voters = [
   {name: 'Bob', age: 30, voted: true},
   {name: 'Jake', age: 32, voted: true},
   {name: 'Kate', age: 25, voted: false},
   {name: 'Sam', age: 20, voted: false},
   {name: 'Phil', age: 21, voted: true},
   {name: 'Ed', age: 55, voted: true},
   {name: 'Tami', age: 54, voted: true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];


console.log(totalVotes(voters))


/// number convert to string


function stringConcat(arr) {
   let result = arr.reduce((aggr, elem) => {
      return aggr + elem
   }, "")
   return result;
}

console.log(stringConcat([1, 2, 3]));


///

function shoppingSpree(arr) {

   let result = arr.reduce((aggr, elem) => {
      return aggr + elem.price
   },0)
   return result
}


let wishlist = [
   {title: "Tesla Model S", price: 90000},
   {title: "4 carat diamond ring", price: 45000},
   {title: "Fancy hacky Sack", price: 5},
   {title: "Gold fidgit spinner", price: 2000},
   {title: "A second Tesla Model S", price: 90000}
];
console.log(shoppingSpree(wishlist))