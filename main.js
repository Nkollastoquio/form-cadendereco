'use strict'; // ativa o modo restrito
// esse modo faz com o que o JavaScript opere dde forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API https://viacep.com.br/ */
 
// FUNÇÃO PARA LIMPAR OS CAMPOS PREENCHIDOS
const limparFormulario = () => {
    document.getElementById('Logradouro').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Localidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('Numero').value = '';
    document.getElementById('Complemento').value = '';
}
 
// verifica se o cep é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep); 
 
// função responsável por preencher o formulário com as informações da API
const preencherFormulario = (endereco) => {
    document.getElementById('Logradouro').value = endereco.logradouro;
    document.getElementById('Bairro').value = endereco.bairro;
    document.getElementById('Localidade').value = endereco.localidade;
    document.getElementById('UF').value = endereco.uf;
}
 
// Função para consumo de API ViaCEP
const pesquisarCep = async() => {  
    limparFormulario();   
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
 
    if(cepValido(cep.value)){
        const dados = await fetch(url);  
        const addres = await dados.json(); 
 
        if(addres.hasOwnProperty('erro')){ 
            alert('CEP não encontrado ')
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP Incorreto');
    }
}
 
// chama escutador para disparar ação de preenchimento
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
 