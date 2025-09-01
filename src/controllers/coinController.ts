import axios from 'axios'

export default class Coin {
  apiKey = import.meta.env.VITE_API_KEY
  url = `https://api.currencylayer.com/`

  instance = axios.create({
    baseURL: this.url,
    params: {
      access_key: this.apiKey,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  async getCurrencies () {
    return await this.instance.get('list')
  }

  async converterAmount (from: string, to: string, amount: number) {
    console.log(from, to, amount)

    return await this.instance.get('convert', {
      params: {
        from,
        to,
        amount,
      },
    })
  }
}
