function calcularImc(peso, altura) {
    // Portão de segurança contra dados matematicamente impossíveis
    if (!peso || peso <= 0 || !altura || altura <= 0) {
        throw new Error("Validação Falhou: Peso e altura devem ser maiores que zero.");
    }
    var imcValue = peso / (altura * altura);
    return parseFloat(imcValue.toFixed(2)); // Retorna o valor fixado com 2 casas decimais
}

function classificarImc(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

// ==========================================
// PARTE 2: MEDIAÇÃO DA INTERFACE (UI/DOM)
// ==========================================
function processarImc() {
    var peso = parseFloat(document.getElementById("txtPeso").value);
    var altura = parseFloat(document.getElementById("txtAltura").value);
    var elementoResultado = document.getElementById("txtResultado");

    try {
        // Invoca as funções puras passando as capturas da tela
        var imc = calcularImc(peso, altura);
        var classificacao = classificarImc(imc);

        elementoResultado.style.color = "#1a1a24";
        elementoResultado.innerText = "Seu IMC é " + imc + " (" + classificacao + ").";
    } catch (error) {
        // Caso a validação da Parte 1 lance um erro, ele é capturado e impresso aqui
        elementoResultado.style.color = "red";
        elementoResultado.innerText = error.message;
    }
}

// ==========================================
// PARTE 3: PROTEÇÃO DE EXPORTAÇÃO PARA O JEST
// ==========================================
// TRUQUE DIDÁTICO: Se o código rodar no navegador, 'module' é indefinido e este bloco é ignorado.
// Se rodar via terminal no Node.js/Jest, o módulo exporta as funções para serem testadas!
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { calcularImc, classificarImc };
}