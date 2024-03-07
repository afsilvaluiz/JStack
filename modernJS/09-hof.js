// HIGHER ORDERS FUNCTIONS

const array = [
  { name: 'Iphone', price: 5000, quantity: 2 },
  { name: 'Macbook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1001, quantity: 5 },
]

// .find
// IF THERE IS AN ELEMENT THAT SATISFIES THE CONDITION, THAT ELEMENT IS RETURNED
// IF THERE ARE MULTIPLE ELEMENTS THAT SATISFY THE CONDITION, THE FIRST ONE IS RETURNED
const find = array.find((product) => product.price > 1000);

// console.log({ find })

// .findIndex
// IF THERE IS AN ELEMENT THAT SATISFIES THE CONDITION, THE INDEX OF THE ELEMENT IS RETURNED
// IN THIS CASE, THE POSITION IN THE ARRAY
// IF THERE ARE MULTIPLE ELEMENTS THAT SATISFY THE CONDITION, THE FIRST ONE IS RETURNED
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');
// console.log({ findIndex })
// console.log('Product:', array[findIndex])

// .some
// CHECKS IF ANY ELEMENT IN THE ARRAY MATCHES THE CONDITION
// RETURNS A BOOLEAN
const some = array.some((product) => product.price < 1000);
// console.log({ some })

// .every
// CHECKS IF EVERY ELEMENT IN THE ARRAY MATCHES THE CONDITION
// RETURNS A BOOLEAN
const every = array.every((product) => product.name === 'Iphone');

// console.log({ every })

// .map
// ALWAYS RETURNS THE SAME NUMBER OF ELEMENTS AS THE BASE ARRAY
// HOWEVER, IF THERE IS A CHANGE WITHIN THE MAP FUNCTION, THIS NEW ARRAY
// WILL CONTAIN THAT INFORMATION
// IT WILL ONLY STORE IN THIS NEW ARRAY IF THERE IS A RETURN
const map = array.map((product) => {
  return {
    ...product,
    subtotal: product.quantity * product.price
  }
});

// console.log({ map });


// .filer
// RETURNS A NEW ARRAY THAT MEETS THE CONDITIONS PASSED IN THE FUNCTION
const filter = array.filter((product) => product.quantity > 1);

// console.log({ filter })

// .reduce
// REDUCES AN ARRAY TO A SPECIFIC TYPE OF DATA
// SECOND PARAMETER SPECIFIES THE TYPE OF DATA TO WHICH THE ARRAY WILL BE REDUCED
// ALSO ALLOCATES AN INITIAL VALUE FOR THE ACCUMULATOR
// FUNCTION THAT RECEIVES 2 PARAMETERS, accumulator AND value
// ACCUMULATOR IS A VARIABLE TO STORE THE FINAL DATA TO BE DISPLAYED
// IN OTHER WORDS, WE CAN BUILD THE RESULT IN WHICH THE ARRAY WILL BE REDUCED
// FROM THIS ACCUMULATOR
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.quantity * product.price);
}, 0);

console.log({ reduce });
