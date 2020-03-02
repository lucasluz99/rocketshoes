# Screenshots

## Home
![Captura de tela de 2020-03-01 23-32-24](https://user-images.githubusercontent.com/53489804/75640960-7bd75680-5c15-11ea-92f3-1a4874b4370c.png)

## Modal

![Captura de tela de 2020-03-01 23-34-41](https://user-images.githubusercontent.com/53489804/75640989-93164400-5c15-11ea-96c3-99eff8a7bba5.png)

## Carrinho

![Captura de tela de 2020-03-01 23-44-17](https://user-images.githubusercontent.com/53489804/75641319-9e1da400-5c16-11ea-94b9-3091505c784d.png)


# Funcionalidades

- Adicionar produto ao carrinho
- Calcular frete (API dos correios)
- Alterar quantidade de produtos no carrinho
- Remover produto do carrinho
- Verificação de estoque ao produto ser adicionado no carrinho ou ter a quantidade alterada

# Por quê ?

Construi este projeto em um curso (bootcamp Rocketseat) e este projeto faz parte do meu portifólio pessoal.

**Para me desafiar e aprender mais resolvir criar algumas funcionalides a mais que não foram abordadas no curso.As funcionalidades são:**

- Paginação de produtos
- Calculo do valor do frete através da API dos correios
- Modal que é aberto ao produto ser adicionado no carrinho
- Manter os items adicionados no carrinho mesmo que o usuário atualize a página (Redux persist)


# Inicializando

 clone o repositório
`git clone git@github.com:lucasluz99/rocketshoes.git`
 entre na pasta
`cd rocketshoes`
 instale as dependências
 `yarn`
 inicie a aplicação
`yarn start`

As informações dos produtos e estoque estão guardadas no arquivo `server.json` e são consumidas através de uma API fake criada através [JsonServer](https://github.com/typicode/json-server) .

inicializando o servidor fake

`yarn json-server server.json -p 3333`





