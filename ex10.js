let renda = 0;
let limite = 28.559,70;

console.log("Digite sua renda anual:");
renda = Number(prompt());

if (renda > limite) {
  console.log("Você deve pagar impostos.");
} else {
  console.log("Você não precisa pagar impostos.");
}