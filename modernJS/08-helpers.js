const tech = 'Node.js';
const array = ['React', 'Node.js', 'Ruby'];

const includesString = tech.includes('ode.js'); // MATCHES PART OF THE STRING
// CASE SENSITIVE
// BOOLEAN

const includesArray = array.includes('React'); // MATCHES A POSITION IN THE ARRAY
// IF THERE'S A POSITION IN THE ARRAY WITH A STRING === TO THE ONE PASSED RETURNS A BOOLEAN
// CASE SENSITIVE
console.log({includesArray});

const startsWith = tech.startsWith('Node'); // MATCHES THE CHARACTER SEQUENCE
// AT THE BEGINNING OF A STRING, OR A SINGLE CHARACTER
// CASE SENSITIVE
// BOOLEAN

const endsWith = tech.endsWith('Node'); // MATCHES THE CHARACTER SEQUENCE
// AT THE END OF A STRING, OR A SINGLE CHARACTER
// CASE SENSITIVE
// BOOLEAN
