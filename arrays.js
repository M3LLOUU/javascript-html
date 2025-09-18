let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log("Posição:" + i + ": " + numeros[i]);
}

    let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];

    for(let fruta of frutas) {
        console.log(fruta);
}

    frutas.forEach(fruta => console.log("Fruta: ", fruta));

{
    let numeros_2 = [5, 10, 15, 20, 25];
    numeros_2.push(30); // Adiciona 30 ao final do array
    console.log(numeros_2);
}

{
    let numeros_3 = [1, 2, 3, 4, 5];
    numeros_3.pop(); // Remove o último elemento do array
    console.log(numeros_3);
}

console.log("----------------------------------------");

{
    let nomes = ["Ana", "Bruno", "Carlos"];
    nomes.unshift("Diana"); // Adiciona "Diana" no início do array
    console.log(nomes);
}

{
    let carros = ["Ford", "Chevrolet", "Toyota"];
    carros.shift();
    console.log(carros);

    console.log(carros.indexOf("Chevrolet")); // Retorna o índice do elemento "Chevrolet"]
}

{
    let numeros_4 = [10, 20, 30, 40, 50];

    let numeros_pares = numeros_4.filter(num => num % 2 === 0);
    console.log(numeros_pares);

    let quadrados = numeros_4.map(num => num * num);
    console.log(quadrados);
}

{
    let cores = ["vermelho", "verde", "azul"];
    console.log(cores.includes("verde")); // true
    console.log(cores.includes("amarelo")); // false
}

{
    let frutas = ["Maçã", "Banana", "Laranja"];
    console.log(frutas.slice(0, 2)); // ["Maçã", "Banana"]

    let palavra = "JavaScript";
    console.log(palavra.slice(0, 4)); // "Java"

}

{
    let nome = "Jaime";
    console.log(nome.toLocaleLowerCase()); // "jaime"
    console.log(nome.toLocaleUpperCase()); // "JAIME"
}