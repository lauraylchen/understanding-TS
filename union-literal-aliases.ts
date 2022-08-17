// type Aliases / Custom
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// Union types & Literal types
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor // union + literal
) {
  let result;
  // result = input1 + input2 // !!! ERROR bcz TS does not check what types of union it is and some types cannot be added together
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
