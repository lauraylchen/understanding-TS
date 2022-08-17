// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // string array type
//   role: [number, string];
// } = {
//   name: 'Laura',
//   age: 22,
//   hobbies: ['Arts', 'Programming'],
//   role: [2, 'author'] // Tuple type Array with fixed type and length
// };

// Better use ENUM instead (Added by TS)
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };
// enum Role { ADMIN = 5, READ_ONLY = 'read only' } // Can change the default starting from 0

const person = {
  name: 'Laura',
  age: 22,
  hobbies: ['Arts', 'Programming'],
  role: Role.ADMIN
};

// TUPLE (Added by TS)
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

if (person.role == Role.READ_ONLY) {
  console.log('is read only');
}
