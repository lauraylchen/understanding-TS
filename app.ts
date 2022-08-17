// const person: {
//   name: string;
//   age: number;
//   hoobies: string[]; -> string array type
// } = {
const person = {
  name: 'Laura',
  age: 22,
  hobbies: ['Arts', 'Programming']
};

// let favoriteActivities: any[]; -> mix array type
// favoriteActivities = ['apple', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  // TS let us use any method on strings bcz hobby is set as string type
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
