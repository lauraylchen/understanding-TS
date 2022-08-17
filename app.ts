const person: {
  name: string;
  age: number;
  hobbies: string[]; // string array type
  role: [number, string];
} = {
  name: 'Laura',
  age: 22,
  hobbies: ['Arts', 'Programming'],
  role: [2, 'author'] // Tuple type Array with fixed type and length
};

// TUPLE
// person.role.push('admin'); // push exception that is allowed on tuple
// person.role[1] = 10; // !!! ERROR cannot be number need to be string !!!
// person.role = [0, 'admin', 'user']; // !!! ERROR length can only be 2 !!!

// ARRAY
// let favoriteActivities: any[]; // mix array type
// favoriteActivities = ['apple', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  // TS let us use any method on strings bcz hobby is set as string type
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
