// função tradicional
function soma(a, b) {
    return a + b;
}

// arrow function
const somaArrow = (a, b) => a + b;

console.log(soma(2, 3)); // 5

console.log(somaArrow(2, 3)); // 5

function ehPar(num) {
    return num % 2 === 0;
}

const ehParArrow = num => num % 2 === 0;

console.log(ehParArrow(4));

// Tabuada com Function tradicional
function tabuada(num) {
    for (let i = 1; i <= 5; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

result = tabuada(3);

console.log(result);

// Tabuada com Arrow Function
const tabuadaArrow = num => {
    for (let i = 1; i <= 5; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

console.log("< === Calculadora === >");

function calculadora (num1, num2, operacao) {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        
        case 'subtracao':
            return num1 - num2;

        case 'multiplicacao':
            return num1 * num2;

        case 'divisao':
            return  num2 != 0 ? num1 / num2 : "Erro: Divisão por zero";

        default:
             return null;
    }
}

console.log(calculadora(10, 5, 'soma')); // 15
console.log(calculadora(10, 5, 'subtracao')); // 5
console.log(calculadora(10, 5, 'multiplicacao')); // 50
console.log(calculadora(10, 0, 'divisao')); // Erro: Divisão por zero
console.log(calculadora(10, 5, 'divisao')); // 2