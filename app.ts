const person = {
    name: 'Anthony',
    age: 34,
    hobbies: ['Guitar','Games','Woodworking'],
    role: [2,'author'] // this is a tuble that only supports 2 elemets. First element is always a number and second a string.
};

person.role.push('admin');
console.log(person.role);

let favoriteActivities: string[]; 
// use the 'any' type if want to use any type. Rarely used.
//favoriteActivities = ['Sports',100]  TS will detect the number not being a string type.

console.log(person.name);

for (const hobbies of person.hobbies) {
    console.log (hobbies.toLowerCase()); 
    // console.log(hobbies.map()); WILL NOT WORK because it will only work with strings. Map will grab all types.
}









/*
Let's say you have this JavaScript object:

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
So you have an object type in an object type so to say.
*/
