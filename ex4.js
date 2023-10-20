let nota = 0;
let limiteAprovacao = 6;
console.log("Digite a nota do aluno:");
nota = Number(prompt());

if (nota >= limiteAprovacao) {
  console.log("O aluno foi aprovado.");
} else {
  console.log("O aluno foi reprovado.");
}