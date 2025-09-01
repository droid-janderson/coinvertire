# CoinVertire

Esse projeto foi desenvolvido para o desafio proposto pela empresa Overzone, que consiste em criar um conversor de moedas utilizando com tecnologias à escolha do desenvolvedor. Para esse projeto, foi utilizado as tecnologias Vue 3 com Vuetify 3, TypeScript e Vite, além de uma API [Currency Layer](https://currencylayer.com/) externa para obter as taxas de câmbio atualizadas.

## ❗️ Link do projeto no Vercel

- [CoinVertire](https://coinvertire.vercel.app)

## 💿 Install

Configure o projeto usando seu gerenciador de pacotes preferido. Use o comando correspondente para instalar as dependências:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |

Após concluir a instalação, seu ambiente estará pronto para rodar o projeto localmente.

| Package Manager                                                | Command        |
|--------------------------------------------------------------- |----------------|
| [yarn](https://yarnpkg.com/getting-started/usage)              | `yarn dev`   |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)      | `npm run dev`|
| [pnpm](https://pnpm.io/pnpm-cli)                               | `pnpm dev`   |

## ✨ Features

- 🖼️ **Stack Front-End Otimizada**: Construída com as tecnologias mais recentes [Vue 3](https://v3.vuejs.org/) e [Vuetify 3](https://vuetifyjs.com/en/), garantindo uma interface moderna, reativa e responsiva.

- 🚦 **Roteamento e Layouts**: Navegação SPA com Vue Router e organização de layouts com vite-plugin-vue-layouts-next, permitindo uma estrutura clara e escalável. [Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts-next](https://github.com/loicduong/vite-plugin-vue-layouts-next)

- 🧩 **Importação Automática de Componentes**: Com unplugin-vue-components, os componentes são importados automaticamente conforme você os utiliza, otimizando o fluxo de trabalho.
 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

## 💡 Uso

Esta seção explica como iniciar o servidor de desenvolvimento com hot-reload e como gerar a build de produção do projeto.

Caso deseje rodar o projeto localmente na sua máquina, foi deixado um arquivo `.env.example` na raiz do projeto. Faça uma cópia desse arquivo e renomeie para `.env`, depois adicione sua chave de API da [Currency Layer](https://currencylayer.com/) no campo `VITE_API_KEY`.

### 🔥 Iniciando o servidor de desenvolvimento

Para iniciar o servidor de desenvolvimento, execute o comando abaixo. O projeto ficará disponível em [http://localhost:3000](http://localhost:3000):

```bash
# Usando Yarn
yarn dev

# Usando NPM
npm run dev

# Usando PNPM
pnpm dev

```

> 💡 Dica: adicione `NODE_OPTIONS='--no-warnings'` ao script `dev` no `package.json` para suprimir os avisos de JSON gerados pelo Vuetify.
>
> * Se estiver utilizando Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) ou superior, use `NODE_OPTIONS='--disable-warning=5401'`.
> * Caso não se incomode com os warnings, você pode simplesmente ignorar ou remover essa configuração.

---

### 📦 Building para Produção

Para gerar a versão de produção, rode:

```bash
# Usando Yarn
yarn build

# Usando NPM
npm run build

# Usando PNPM
pnpm build

```

Após a conclusão do processo, os arquivos de build estarão prontos para **deploy em ambiente de produção**.

---


## 📑 License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC
