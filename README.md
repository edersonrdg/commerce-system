# commerce-system

## Sistema de controle de produtos, vendedores, compras e vendas.

---

<h4 align="center" >
	🚀 Node project Finalizado 🚀
</h4>

---

# Sumário

- [Tecnologias](#tech)
- [Features](#feat)
- [Demo](#Demo)
- [Instalação](#Pré-requisitos)
- [Autor](#Autor)

---

<p float="left">
  <img src="https://media3.giphy.com/media/kXBzWNZu2ozg5u7Raz/giphy.gif" width="400" />
  <img src="https://i.ibb.co/641KsQr/imagem-2021-04-15-231420.png" width="400"/> 
</p>

---

<h2 id="tech">Tecnologias 🛠 </h2>

As seguintes ferramentas foram usadas na construção do projeto:  

- **Linguagem**: [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
- **Framework**: [Node.js](https://nodejs.org/en/)
- **Web server**: [Express](https://expressjs.com)
- **Banco de dados**: [MongoDb](https://www.mongodb.com) 
- **ORM**: [Mongoose](https://mongoosejs.com)
- **Testes**: [Jest](https://jestjs.io/pt-BR/)
- **Validações**: [Joi](https://joi.dev/api/)
- **Padronização de código**: [Eslint](https://eslint.org) | [EditorConfig](https://editorconfig.org)


---

<h2 id="feat">Features 💻</h2>

- ✓ Produtos:
  - ✓ Crud de produtos (Create, read, update and delete).
  - ✓ Validação de dados do produto.
  - ✓ Acrécimo do estoque do produto ao realizar uma compra.
  - ✓ Decrécimo do estoque do produto ao realizar uma venda.
  - ✓ Registro do custo total de compra.
  - ✓ Registro de quantidade vendida.
- ✓ Vendedores:
  - ✓ Crud de Vendedores (Create, read, update and delete).
  - ✓ Cadastro de vendedores com imagem.
  - ✓ Registro de quantidade de vendas obtidas.
  - ✓ Registro de receita de vendas obtidas.
- ✓ Compras:
  - ✓ Relacionamento com produtos.
  - ✓ Cadastro e listagem de compras.
  - ✓ Erro em uma compra sem informar produto.
- ✓ Vendas:
  - ✓ Cadastro e listagem de vendas.
  - ✓ Erro em uma venda sem informar vendedor ou produto.
  - ✓ Erro em uma venda de um produto que não tenha estoque Suficiente.
  - ✓ Relacionamento com produtos e vendedores
- x Deploy do sistema.

---
<h2 id="Pré-requisitos">Instalação</h2>

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/edersonrdg/commerce-system.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd commerce-system

# Instale as dependências
$ npm install

# Crie um arquivo .env e adicione a url para conexão do mongodb
$ MONGO_URL="link"

# Execute a aplicação em modo de desenvolvimento
$ npm run node:dev

# O servidor inciará na porta 3000 ou na porta que for selecionada no .env por PORT.
$ Acesse localhost:PORTA,
```

---

## Autor 

<a href="https://github.com/edersonrdg">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/60035985?s=460&u=3f67302dcc7cc3e33a51c71ad77fba31d6d2f6e1&v=4" width="100px;" alt=""/>
 <br />
 </a>


Feito por Ederson rodrigo, Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-edersonsl-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/edersonsl/)](https://www.linkedin.com/in/edersonsl/)
[![Gmail Badge](https://img.shields.io/badge/-edersonrodrigo31@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:edersonrodrigo31@gmail.com)](mailto:edersonrodrigo31@gmail.com)
