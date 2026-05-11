import entradaDados from 'readline-sync';

let divida = entradaDados.question("Qual o valor da dívida? ");
let atraso = entradaDados.question("Quantos dias de atraso? ");
let valorDivida = Number(divida.replace(',', '.'));
let diasAtraso = Number(atraso);

if (valorDivida > 0) {
    if (diasAtraso > 0) {
        let juros = diasAtraso <= 15 ? 0.05 : 0.1;
        let total = valorDivida + (valorDivida * juros);
        console.log("O valor original da dívida é: " + valorDivida.toFixed(2));
        console.log("O valor dos dias em atraso é: " + diasAtraso);
        console.log("O valor da sua taxa de juros a ser aplicada é: " + juros * 100 + "%");
        console.log("O total a ser pago é: " + total.toFixed(2));
    }
} else {
    console.log("Sua dívida está em dia!");

}