const user = {
  firstName: 'Luiz',
  lastName: 'Silva',
  age: 41,
  instagram: 'afsilvaluiz',
  skills: ['Front-end', 'Back-end', '3d-modeling'],
  full_name: 'Luiz Silva',
};

// Destructuring 
const { firstName, lastName, age, skills } = user;

// RENAME ATTRIBUTE
const { full_name: fullName } = user;

// GET BY POSITION
const [primary, secondary, tertiary] = skills;

console.log(fullName);
