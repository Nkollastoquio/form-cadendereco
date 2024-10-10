# form-cadendereco
# Cadastro de Endereço

Este projeto consiste em um formulário simples para o cadastro de endereços. A interface permite que os usuários insiram informações essenciais, como CEP, rua, número, bairro, complemento, cidade e estado.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **index.html**: O arquivo HTML que contém a estrutura do formulário.
2. **endereco.css**: O arquivo CSS para estilização do formulário.
3. **main.js**: O arquivo JavaScript (atualmente vazio, mas destinado a futuras funcionalidades).

## Funcionalidades

- **Inputs**: O formulário inclui campos para capturar informações do endereço:
  - CEP
  - Rua
  - Número
  - Bairro
  - Complemento
  - Cidade
  - Estado
- **Botão de Enviar**: Um botão para submeter o formulário.

## Como Usar

1. **Clone o Repositório**:
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd nome-do-repositorio
   ```

2. **Abra o arquivo `index.html` em um navegador** para visualizar e interagir com o formulário.

3. **Preencha os campos** com as informações do endereço desejado.

4. **Clique no botão "Entrar"** para enviar os dados (a funcionalidade de envio deve ser implementada no arquivo `main.js`).

## Requisitos

- Um navegador moderno para visualizar a página.
- (Opcional) Um servidor local se você deseja testar a funcionalidade de envio de dados.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema (issue) ou fazer um pull request.

## Licença

Este projeto é de código aberto e pode ser utilizado e modificado conforme necessário.
 



### codigo js

1 Modo Estrito: Ativa um modo que ajuda a evitar erros comuns no JavaScript.

2 limparFormulario: Limpa todos os campos do formulário, deixando-os vazios.

 3 eNumero: Verifica se uma string contém apenas dígitos.

4 cepValido: Confirma se um CEP tem exatamente 8 caracteres numéricos.

preencherFormulario: Preenche os campos do formulário com os dados de um endereço, corrigindo os campos para que usem as propriedades corretas do objeto endereco.


### Descrição do Código

1. **Modo Estrito**:
   ```javascript
   'use strict';
   ```
   Ativa o modo restrito do JavaScript, que ajuda a evitar erros comuns de programação e torna o código mais seguro.

2. **Limpeza do Formulário**:
   ```javascript
   const limparFormulario = () => {
       document.getElementById('Logradouro').value = '';
       document.getElementById('Bairro').value = '';
       document.getElementById('Localidade').value = '';
       document.getElementById('UF').value = '';
       document.getElementById('Numero').value = '';
       document.getElementById('Complemento').value = '';
   }
   ```
   A função `limparFormulario` é responsável por limpar todos os campos do formulário. Ela redefine o valor de cada campo para uma string vazia.

3. **Validação do CEP**:
   ```javascript
   const eNumero = (numero) => /^[0-9]+$/.test(numero);
   const cepValido = (cep) => cep.length == 8 && eNumero(cep);
   ```
   - `eNumero`: Verifica se uma string contém apenas dígitos numéricos.
   - `cepValido`: Confirma se o CEP tem exatamente 8 caracteres e se todos são números.

4. **Preenchimento do Formulário**:
   ```javascript
   const preencherFormulario = (endereco) => {
       document.getElementById('Logradouro').value = endereco.logradouro;
       document.getElementById('Bairro').value = endereco.bairro;
       document.getElementById('Localidade').value = endereco.localidade;
       document.getElementById('UF').value = endereco.uf;
   }
   ```
   Esta função preenche os campos do formulário com os dados retornados pela API, como logradouro, bairro, localidade e UF (Unidade Federativa).

5. **Pesquisa do CEP**:
   ```javascript
   const pesquisarCep = async () => {
       limparFormulario();
       const url = `http://viacep.com.br/ws/${cep.value}/json/`;

       if (cepValido(cep.value)) {
           const dados = await fetch(url);
           const addres = await dados.json();

           if (addres.hasOwnProperty('erro')) {
               alert('CEP não encontrado');
           } else {
               preencherFormulario(addres);
           }
       } else {
           alert('CEP Incorreto');
       }
   }
   ```
   - A função `pesquisarCep` é assíncrona e inicia limpando o formulário.
   - Um URL é gerado utilizando o valor do CEP informado.
   - Se o CEP for válido, uma requisição `fetch` é feita à API.
   - Os dados retornados são convertidos para JSON. Se o JSON contém uma propriedade `erro`, um alerta é exibido informando que o CEP não foi encontrado. Caso contrário, o formulário é preenchido com os dados obtidos.

6. **Escutador de Evento**:
   ```javascript
   document.getElementById('cep').addEventListener('focusout', pesquisarCep);
   ```
   Um evento de `focusout` é adicionado ao campo de CEP. Isso significa que quando o usuário sai do campo (perde o foco), a função `pesquisarCep` será chamada para buscar e preencher os dados automaticamente.

### Conclusão

Esse código é uma implementação simples e eficaz para buscar informações de endereço a partir de um CEP, utilizando a API ViaCEP. Ele realiza a validação do CEP, manipula a interface do usuário e lida com respostas da API, tudo de forma assíncrona. Isso melhora a experiência do usuário ao preencher formulários relacionados a endereços.

## fontes ultilizadas 
* git hub
* vscode
* google



## Autores 

* Nkillas Angelo Toquio(https://github.com/Nkollastoquio)
* maria isabel(https://github.com/belsil5aa)
* Maria eduarda(https://github.com/dudafontinele)
* Professor Leonardo(https://github.com/LeonardoRochaMarista/LeonardoRochaMarista)


## Resultado
![](img/tela.gif)