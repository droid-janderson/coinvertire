<template>
  <div>
    <v-form ref="form" lazy-validation :style="{ width: $vuetify.display.mobile ? '320px' : '400px' }">
      <v-row>
        <h1
          class="mx-auto"
          :style="{
            color: theme.current.value.colors.primary,
          }"
        >
          Conversor de Moedas
        </h1>
      </v-row>
      <v-row>
        <v-col>
          <label for="quantityCoin">Valor</label>
          <v-number-input
            id="quantity"
            v-model="amount"
            bg-color="background"
            class="text-center"
            color="text_primary"
            control-variant="hidden"
            hide-details
            :hide-input="false"
            :inset="false"
            :min="0"
            :min-fraction-digits="2"
            placeholder="0.00"
            :precision="2"
            :reverse="false"
            :step="2"
            variant="solo"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="5">
          <label for="fromCurrency">De</label>
          <v-autocomplete
            id="fromCurrency"
            v-model="fromCurrency"
            bg-color="background"
            color="text_primary"
            item-title="text"
            item-value="value"
            :items="currencies"
            variant="solo"
          />
        </v-col>
        <v-col class="d-flex align-center justify-center" cols="12" md="2">
          <v-btn
            color="secondary"
            :elevation="2"
            icon="mdi-swap-horizontal"
            :onclick="changeCoins"
          />
        </v-col>
        <v-col cols="12" md="5">
          <label for="toCurrency">Para</label>
          <v-autocomplete
            id="toCurrency"
            v-model="toCurrency"
            bg-color="background"
            color="text_primary"
            :hide-details="$vuetify.display.mobile"
            item-title="text"
            item-value="value"
            :items="currencies"
            variant="solo"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col>
          <v-card color="background">
            <v-card-text>
              <h3 class="font-weight-regular">Valor convertido</h3>
              <h2 class="font-weight-regular">$ {{ amountConvert.result.toFixed(2) }}</h2>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'
  import CoinController from '@/controllers/coinController'

  const coinController = new CoinController()

  // Theme
  const theme = useTheme()

  // Variables
  const amount = ref(0)
  const amountConvert = ref<object | null>({ result: 0 })
  const fromCurrency = ref('USD')
  const toCurrency = ref('BRL')

  const currencies = ref<any[]>([])

  // mounted
  // onMounted(async () => {
  //   await getCoins()
  // })

  // Methods
  function useDebounce (fn: Function, delay = 500) {
    let timer: number | null = null
    return (...args: any[]) => {
      if (timer) clearTimeout(timer)
      timer = (setTimeout(() => fn(...args), delay) as unknown) as number
    }
  }

  async function getCoins () {
    const response = await coinController.getCurrencies()

    currencies.value = Object.entries(response.data.currencies).map(([code]) => ({
      text: code,
      value: code,
    }))
  }

  async function convertAmount () {
    const response = await coinController.converterAmount(fromCurrency.value, toCurrency.value, amount.value)

    amountConvert.value = response.data
  }

  async function changeCoins () {
    const value = fromCurrency.value
    fromCurrency.value = toCurrency.value
    toCurrency.value = value

    await convertAmount()
  }

  const debouncedAPI = useDebounce(convertAmount, 800)

  watch([amount], () => {
    debouncedAPI()
  })
</script>
