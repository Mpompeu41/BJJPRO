//1º Projeto Bleu edTech de Programação.
console.log('<><><><>Pergunta do Detetive<><><><>');

console.log();
console.log("Responda S para Sim");
console.log("Responda N para Não");
console.log();
let contadors = 0;
let contadorn = 0;

let resp1 = prompt('Telefonou para a vítima?');
let resp2 = prompt('Esteve no local do crime?');
let resp3 = prompt('Mora perto da vítima?');
let resp4 = prompt('Devia para a vítima?');
let resp5 = prompt('Já trabalhou com a vítima?');

if(resp1 ==="s"){
  contadors=contadors + 1
} else{
  contadorn=contadorn + 1
}
if(resp2 ==="s"){
  contadors=contadors + 1
} else{
  contadorn=contadorn + 1
}
if(resp3 ==="s"){
  contadors=contadors + 1
} else{
  contadorn=contadorn + 1
}
if(resp4 ==="s"){
  contadors=contadors + 1
} else {
  contadorn=contadorn + 1
}

if(contadors===2){
  console.log("Você é Suspeito");
} else if(contadors===3){
  console.log("Você é Cúmplice");
} else if(contadors===4){
  console.log("Você é Cúmplice");
} else if(contadors===5){
  console.log("Você está Preso, é o Assassino");
} else if(contadors =1){
  console.log("Você está Liberado, é Inocente");
}
