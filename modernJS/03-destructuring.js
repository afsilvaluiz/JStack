const user = {
  firstName: 'Luiz',
  lastName: 'Silva',
  age: 41,
  instagram: 'afsilvaluiz',
  skills: ['Front-end', 'Back-end', '3d-modeling'],
  full_name: 'Full name',
};

// Destructuring 
const { firstName, lastName, skills } = user;

// RENAME ATTRIBUTE
const { full_name: fullName } = user;

// GET BY POSITION
const [primary, secondary, tertiary, quaternary] = skills;

console.log(firstName + ' ' + lastName);
