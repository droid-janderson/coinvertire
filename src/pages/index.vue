<template>
  <container
    class="d-flex align-center justify-space-around mt-4"
    style="min-height: 90vh"
  >
    <div
      class="d-flex flex-column align-center justify-center rounded-xl"
      :style="{
        width: $vuetify.display.mobile ? '360px' : '500px',
        height: $vuetify.display.mobile ? '620px' : '460px',
        backgroundColor: theme.current.value.colors.backgroundSec,
        'box-shadow': theme.current.value.colors.boxShadow,
      }"
    >
      <form-converter />
    </div>
  </container>
</template>

<script lang="ts" setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()
</script>
