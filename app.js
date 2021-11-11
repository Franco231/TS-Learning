var person = {
    name: 'Anthony',
    age: 34,
    hobbies: ['Guitar', 'Games', 'Woodworking', 'learning'],
    role: [2, 'author'] // this is a tuble that only supports 2 elemets. First element is always a number and second a string.
};
person.role.push('admin'); // push in an exception to add to a tuble. Careful using push when adding to a tuple.
console.log(person.role);
var favoriteActivities;
// use the 'any' type if want to use any type. Rarely used.
//favoriteActivities = ['Sports',100]  TS will detect the number not being a string type.
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    console.log(hobbies.toLowerCase());
    // console.log(hobbies.map()); WILL NOT WORK because it will only work with strings. Map will grab all types.
}
if (person.role[1] === 'authorrrr') {
    console.log('You are the author');
}
else {
    console.log('Not the Author');
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
