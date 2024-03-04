const user = {
  firstName: 'Luiz',
  lastName: 'Silva',
  age: 41,
  instagram: 'afsilvaluiz',
  skills: ['Back-end', 'Front-end', '3d-modelling'],
  full_name: 'Luiz Silva',
  active: false,
};

// SPREAD OPERATOR
// PRINCIPLE OF IMMUTABILITY, NEVER CHANGE OBJECT PROPERTIES DIRECTLY

const updatedUser = {
  // CHANGES MADE HERE, AFTER ...USER, WILL OVERWRITE THE PROPERTIES
  // ARRAYS WORK THE SAME WAY
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true,
};

console.log({user});
console.log({updatedUser})
