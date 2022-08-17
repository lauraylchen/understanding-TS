// unknown is better than any type
let userInput: unknown; // any value
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // ERROR bcz cannot garranty type for unknown

if (typeof userInput === 'string') {
  userName = userInput;
}

// never type -> crash the script
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {} // infinite loop
}

const result = generateError('An error occured!', 500);
console.log(result); // it does not console.log undefined
