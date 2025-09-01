# CoinVertire

Esse projeto foi desenvolvido para o desafio proposto pela empresa Overzone, que consiste em criar um conversor de moedas utilizando com tecnologias à escolha do desenvolvedor. Para esse projeto, foi utilizado as tecnologias Vue 3 com Vuetify 3, TypeScript e Vite, além de uma API [Currency Layer](https://currencylayer.com/) externa para obter as taxas de câmbio atualizadas.

## ❗️ Link do projeto no Vercel

- [CoinVertire](https://coinvertire.vercel.app)

## 💿 Install

Configure o projeto usando seu gerenciador de pacotes preferido. Use o comando correspondente para instalar as dependências:

| Package Manager                                           | Command        |
| --------------------------------------------------------- | -------------- |
| [yarn](https://yarnpkg.com/getting-started)               | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) | `npm install`  |
| [pnpm](https://pnpm.io/installation)                      | `pnpm install` |

Após concluir a instalação, seu ambiente estará pronto para rodar o projeto localmente.

| Package Manager                                           | Command       |
| --------------------------------------------------------- | ------------- |
| [yarn](https://yarnpkg.com/getting-started/usage)         | `yarn dev`    |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) | `npm run dev` |
| [pnpm](https://pnpm.io/pnpm-cli)                          | `pnpm dev`    |

## ✨ Features

- 🖼️ **Stack Front-End Otimizada**: Construída com as tecnologias mais recentes [Vue 3](https://v3.vuejs.org/) e [Vuetify 3](https://vuetifyjs.com/en/), garantindo uma interface moderna, reativa e responsiva.

- 🚦 **Roteamento e Layouts**: Navegação SPA com Vue Router e organização de layouts com vite-plugin-vue-layouts-next, permitindo uma estrutura clara e escalável. [Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts-next](https://github.com/loicduong/vite-plugin-vue-layouts-next)

- 🧩 **Importação Automática de Componentes**: Com unplugin-vue-components, os componentes são importados automaticamente conforme você os utiliza, otimizando o fluxo de trabalho.
  [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

## 💡 Uso

Esta seção explica como iniciar o servidor de desenvolvimento com hot-reload e como gerar a build de produção do projeto.

Caso deseje rodar o projeto localmente na sua máquina, foi deixado um arquivo `.env.example` na raiz do projeto. Faça uma cópia desse arquivo e renomeie para `.env`, depois adicione sua chave de API da [Currency Layer](https://currencylayer.com/) no campo `VITE_API_KEY` e adicione a url da API no campo `VITE_URL_API`.

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
> - Se estiver utilizando Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) ou superior, use `NODE_OPTIONS='--disable-warning=5401'`.
> - Caso não se incomode com os warnings, você pode simplesmente ignorar ou remover essa configuração.

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

### Moedas Suportadas

O conversor suporta as seguintes moedas:

```Json
"currencies": {
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudan Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTC": "Bitcoin",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswanan Pula",
    "BYN": "New Belarusian Ruble",
    "BYR": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLF": "Chilean Unit of Account (UF)",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "CNH": "Chinese Yuan Offshore",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón",
    "CUC": "Cuban Convertible Peso",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Republic Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "GBP": "British Pound Sterling",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanaese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Sheqel",
    "IMP": "Manx pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Króna",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgystani Som",
    "KHR": "Cambodian Riel",
    "KMF": "Comorian Franc",
    "KPW": "North Korean Won",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Laotian Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LTL": "Lithuanian Litas",
    "LVL": "Latvian Lats",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Myanma Kyat",
    "MNT": "Mongolian Tugrik",
    "MOP": "Macanese Pataca",
    "MRU": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan Córdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Nuevo Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Zloty",
    "PYG": "Paraguayan Guarani",
    "QAR": "Qatari Rial",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "South Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLE": "Sierra Leonean Leone",
    "SLL": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "STD": "São Tomé and Príncipe Dobra",
    "STN": "São Tomé and Príncipe Dobra",
    "SVC": "Salvadoran Colón",
    "SYP": "Syrian Pound",
    "SZL": "Swazi Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Paʻanga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "United States Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistan Som",
    "VES": "Sovereign Bolivar",
    "VND": "Vietnamese Dong",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tala",
    "XAF": "CFA Franc BEAC",
    "XAG": "Silver (troy ounce)",
    "XAU": "Gold (troy ounce)",
    "XCD": "East Caribbean Dollar",
    "XCG": "Caribbean Guilder",
    "XDR": "Special Drawing Rights",
    "XOF": "CFA Franc BCEAO",
    "XPF": "CFP Franc",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMK": "Zambian Kwacha (pre-2013)",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
}

```

---

## 📑 License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC
