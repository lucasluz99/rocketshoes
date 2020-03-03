# Screenshots

## Home
![Captura de tela de 2020-03-01 23-32-24](https://user-images.githubusercontent.com/53489804/75640960-7bd75680-5c15-11ea-92f3-1a4874b4370c.png)

## Modal

![Captura de tela de 2020-03-01 23-34-41](https://user-images.githubusercontent.com/53489804/75640989-93164400-5c15-11ea-96c3-99eff8a7bba5.png)

## Carrinho

![Captura de tela de 2020-03-01 23-44-17](https://user-images.githubusercontent.com/53489804/75641319-9e1da400-5c16-11ea-94b9-3091505c784d.png)


# Funcionalidades

- Adicionar produto ao carrinho
- Calcular preço e prazo de entrega do frete
- Alterar quantidade de produtos no carrinho
- Remover produto do carrinho
- Verificação de estoque ao produto ser adicionado no carrinho ou ter a quantidade alterada
- Obs: O butão de finalizar compra não possui funcionaliade

# Inicializando

 Clone o repositório

`git clone git@github.com:lucasluz99/rocketshoes.git`

 Entre na pasta

`cd rocketshoes`

 Instale as dependências

 `yarn`

 Inicie a aplicação

`yarn start`

### As informações dos produtos e estoque estão guardadas no arquivo `server.json` e são consumidas através de uma API fake criada através [JsonServer](https://github.com/typicode/json-server) .

Inicialize o servidor fake

`yarn json-server server.json -p 3333`

### Para ter acesso a funcionalidade de calcular o frete você terá que rodar este servidor [Rocketshoes Server](https://github.com/lucasluz99/rocketshoes-backend).

Clone o repositório

`git clone git@github.com:lucasluz99/rocketshoes-backend.git`

Entre na pasta

`cd rocketshoes-backend`

Instalale as dependências

`yarn`

Inicie o servidor

`yarn dev`



# Contruído com

- [React](https://pt-br.reactjs.org/)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [axios](https://github.com/axios/axios)
- [immer](https://github.com/immerjs/immer)
- [polished](https://polished.js.org/docs/#hidevisually)
- [react-icons](https://react-icons.netlify.com/#/)
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [reactotron](https://github.com/infinitered/reactotron)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [styled-components](https://styled-components.com/)
- [yup](https://github.com/jquense/yup)
- [json-server](https://www.npmjs.com/package/json-server)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
