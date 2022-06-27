interface User {
    name: string;
    age: number;
    occupation: string;
};

export const users: User[] = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    },
    {
      name: 'Giovanne Berteli',
      age: 20,
      occupation: 'Full Stack developer in ascension'
  }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);