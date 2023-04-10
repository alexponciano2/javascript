const array = [1, 2, 3, 4, 5];

const soma = array.reduce((total, array) => {
    return total + array;
}, 0);

console.log(soma);