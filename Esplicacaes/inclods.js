// Array.prototype.includes()

// Sumário
// O método includes() determina se um array contém um determinado elemento, 
// retornando true ou false apropriadamente.

// Ex:

const array1 = [1, 2, 3,8];
// quase uma verificação de se existe uma elemento dentro dop Arry
console.log(array1.includes(8));
// Expected output: true

const pets = ['cat', 'dog', 'bat', 'preá'];

console.log(pets.includes('cat','preá'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false