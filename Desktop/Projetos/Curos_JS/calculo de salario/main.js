const { gets, print } = require("./funcoes");

const salario = Number(gets());
const beneficio = Number(gets());

function calcularImposto(salario, percentual) {
    return salario * (percentual / 100);
}

function obterPercentualImposto (salario) {
    if (salario >= 0 && salario <= 1100){
        return 5;
    } else if (salario > 1100.01 && salario <= 2500){
        return 10
    } else {
        return 15;
    }
}

const percentual = obterPercentualImposto(salario);
const imposto = calcularImposto(salario, percentual);

const valorFinal = salario - imposto + beneficio;

print(valorFinal.toFixed(2))