# Loja Tênis

Sistema Web em React e Node para e-commerce de uma loja de tênis fictícia.

Programa livre para acesso e cópia com finalidade de aprendizado.

Link para demonstração no Youtube: https://youtu.be/xtohQERoFQQ

Por: raquelms203

### raquelmartins203@yahoo.com.br

### 1. Instruções para instalação e execução

Pré-requisitos:

- Possuir o MongoDB instalado no computador, disponível em:
  https://www.mongodb.com/try/download/community

- Possuir o Node instalado no computador, disponível em:
  https://nodejs.org/en/download/

É recomendado adicionar as variáveis de ambiente npm e node no terminal.

#### 1.1 Execução do back-end

Para baixar as bibliotecas do back-end, execute no terminal na pasta /api

> npm i

Para rodar o projeto, execute em seguida

> node index

Na porta 3000 será iniciado o back-end com banco de dados Mongo.

Foram desenvolvidos os seguintes endpoints:

**/products**

GET: listagem de produtos.

POST: cadastro de produtos.

> Exemplo de cadastro:

```
 {
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "amount": 15,
      "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Tenis_Energyfalcon_Preto_EE9843_01_standard.jpg"
 }
```

**/product/:id**

GET: retorna o produto com o id informado.

PUT: atualiza o produto pelo id informado, o json de exemplo é igual ao de cadastro de produtos.

DELETE: remove o produto com o id informado.

**/sale**

POST: realiza uma compra.

> Exemplo de compra:

```
 {
     "id": "61afa3d63837578303bc56ae",
     "amount": 3
 }
```

#### 1.2 Execução do front-end

Para rodar o front-end, execute no terminal na pasta /web

> npm start
