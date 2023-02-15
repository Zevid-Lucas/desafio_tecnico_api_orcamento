# Desafio Técnico - Api de Orçamento

## Descrição do Projeto

Desenvolvido um middleware que, além de retornar uma listagem de usuários e produtos, também retorna um orçamento baseado na taxa do usuário selecionando e no valor dos produtos escolhidos.

## Funcionalidades do Projeto

- Funcionalidade 1: Retorna a lista de usuários
- Funcionalidade 2: Retorna a lista de produtos
- Funcionalidade 3: Retorna o valor total que o usuário irá pagar pelos produtos de acordo com a sua taxa

## Rotas

### Get /docs

- Essa rota é referente a documentação feita utilizando swagger, ao qual ao realizar os passo de Abrir e Executar o Projeto. Você poderá acessar todas as rotas disponíveis e testá-las de forma mais visual e intuitiva.

### Get /users

- A rota `get /users` retorna a lista completa de usuários.

saída com status 200:

```json
[
 {
   "id": 1,
   "name": "cvRhuZicvV",
   "tax": 79
 },
 {
   "id": 2,
   "name": "P5hBDBonm3",
   "tax": 121
 },
 {
   "id": 3,
   "name": "buTTe8n3gT",
   "tax": 82
 },
...
]
```

### Get /products

- A rota `get /products` retorna a lista completa de products.

saída com status 200:

```json
[
 {
    "id": 1,
    "name": "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
    "price": 6945
  },
  {
    "id": 2,
    "name": "nostrum veritatis reprehenderit repellendus vel numquam soluta ex inventore ex",
    "price": 2435
  },
  {
    "id": 3,
    "name": "praesentium explicabo reprehenderit laudantium a pariatur ab sit pariatur quos",
    "price": 4985
  },
...
]
```

### Get /user_products/:userId/:productsIds

- A rota `get /user_products/:userId/:productsIds` retorna o valor total que o usuário irá pagar pelos produtos de acordo com a sua `tax`.

com endpoint: `/user_products/1/1,2,3`
saída com status 200:

```json
{
  "totalPrice": 11348.35
}
```

## Abrir e Executar o Projeto

- Após clonar o repositório, vá até a pasta do projeto e abra-o no VsCode pelo terminal através do comando `code .`
- Instale as dependências com o comando: `npm install`
- Crie um arquivo `.env` e siga as regras que a seguir:
  - Adicione a variável PORT e insira uma porta disponível da sua escolha, por exemplo, `PORT=3009`.
  - Nesse ponto você terá dois caminhos para executar o projeto. Podendo realizar o build ou utilizando o script de desenvolvimento.
  - Através do build: Em seguida, no terminal, dentro da pasta do projeto execute o comando: `npm run build` para realizar a montagem do projeto. Ao finalizar o build do projeto, execute o comando `npm start`.
  - Através do desenvolvimento: No terminal, execute o comando `npm run start:dev`

## Tecnologias Utilizadas no Projeto

- NodeJs
- Express
- Jest
- Husky
- Eslint
- DotEnv
- Typescript
- Axios
- Swagger

## Autor

| [<img src="https://avatars.githubusercontent.com/u/65208891?s=400&u=a019a169e12cb45b26bfa1d56559b52d73f57560&v=4" width=115><br><sub>David Costa </sub>](https://github.com/Zevid-Lucas) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
