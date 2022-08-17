function add(n1: number, n2: number) {
  return n1 + n2;
}

// Return type void = Does not return anything
function printResult(num: number) {
  console.log('Result: ' + num);
}

// Function type with callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));
// console.log undefined when function is void
// console.log(printResult(add(5, 12)));

// undefined is a valide type

// Functions as types
let combineValues: (p1: number, p2: number) => number;
combineValues = add;
// let combineValues;
// combineValues = 5; // !!! ERROR bcz used as function later
// let combineValues: Function;
// combineValues = printResult; // !!! ERROR undefined bcz this function takes only 1 argument

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result)
  // return result // no ERROR bcz void type will not do anything with return value
})
