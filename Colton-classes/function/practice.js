// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// // Write your code here
// const firstName = fullNames.map(function (first){
//     console.log( first.first)
// }
// )



  function validUserNames(arr) {
    return arr.filter(name => name.length < 10);
  }