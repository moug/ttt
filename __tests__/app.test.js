const { calcularImc, classificarImc } = require("../app");

describe("Suite de Validações Unitárias - Calculadora de IMC", () => {

    // TESTE 1: VALIDAÇÃO DE RESTRIÇÃO DE ENTRADA
    test("Deve lançar uma exceção de validação se peso ou altura forem iguais a zero", () => {
        expect(() => {
            // Executa a função passando altura inválida (zero)
            calcularImc(70, 0);
        }).toThrow("Validação Falhou: Peso e altura devem ser maiores que zero.");
    });

    // TESTE 2: VALIDAÇÃO DO CÁLCULO MATEMÁTICO
    test("Deve computar o IMC corretamente retornando um valor com duas casas decimais", () => {
        const resultado = calcularImc(70, 1.75); // Conta: 70 / (1.75 * 1.75) = 22.857...
        expect(resultado).toBe(22.86); // Espera que o arredondamento seja exatamente 22.86
    });

    // TESTE 3: VALIDAÇÃO DA REGRA DE CLASSIFICAÇÃO TEXTUAL
    test("Deve retornar o diagnóstico textual correto para a faixa de Peso Normal", () => {
        const classificacao = classificarImc(22.86);
        expect(classificacao).toBe("Peso normal");
    });
});