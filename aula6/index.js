/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 2529921129129
*/
const nome = 'Luiz otávio';
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNascimento;


imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log (`tem ${alturaEmM} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)

