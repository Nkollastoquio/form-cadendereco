'use strict'; // Ativa o modo restrito 
// Esse modo faz com que o JavaScript opere de forma mas segura e rigorosa, ajudando a evitar erros comuns de programação
/* consumo de API - https://viacep.com.br/*/

// função para limpar campos preencidos 
const limparFormulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('Complemento').value = '';
    document.getElementById('CEP').value = '';
    document.getElementById('N.°').value = '';
}

// Verifica se o CEP e valido 
const eNumero = (numero) =>  /^[0-9]+$/.test(numero);
// essa função faz o numro correto do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const prencherFormulaario = (endereco) => {
    document.getElementById('logradouro'). value = endereco.logradouro;
    document.getElementById('Bairro'). value = endereco.logradouro;
    document.getElementById('uf'). value = endereco.logradouro;
}