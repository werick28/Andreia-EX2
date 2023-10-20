let numero1 = 0;
let numero2 = 0;
console.log("Digite o primeiro número:");
numero1 = Number(prompt());
console.log("Digite o segundo número:");
numero2 = Number(prompt());

if (numero1 % numero2 === 0) {
  console.log("O primeiro número é divisível pelo segundo.");
} else {
  console.log("O primeiro número não é divisível pelo segundo.");
}