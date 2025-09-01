<template>
  <v-container
    class="d-flex flex-column align-center justify-center"
    :style="{
      backgroundColor: theme.current.value.dark ? '#101729' : '#F8F9FD',
      height: '100vh'
    }"
  >
    <div>
      <img src="../assets/error-404-PhotoRoom.png-PhotoRoom.png">
      <h1 class="text-center font-weight-bold" style="font-size: 40px">
        Página não encontrada!
      </h1>

      <h2 class="text-center">Redirecionando a home...</h2>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const router = useRouter()

  onMounted(() => {
    setTimeout(() => {
      router.replace('/')
    }, 3000)
  })

</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
