<template>
  <v-app-bar :color="theme.current.value.colors.background" :elevation="2">
    <v-app-bar-title
      class="font-weight-bold"
      :style="{
        color: theme.current.value.colors.primary
      }"
    >CoinVertire <v-icon color="secondary">mdi-bitcoin</v-icon></v-app-bar-title>
    <v-btn
      :color="theme.current.value.dark ? 'secondary' : 'primary'"
      :icon="theme.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
      @click="theme.toggle()"
    />
  </v-app-bar>
</template>

<script setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()
</script>
