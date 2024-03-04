const user = {
  firstName: 'Luiz',
  lastName: 'Silva',
  age: 41,
  instagram: 'afsilvaluiz',
  skills: ['Back-end', 'Front-end', '3d-modelling'],
  full_name: 'Luiz Silva',
};

// REST OPERATOR
// NEEDS TO BE THE LAST ELEMENT
// ARRAYS WORK THE SAME WAY
const { firstName, skills, ...rest } = user;

console.log(firstName, skills, rest);
