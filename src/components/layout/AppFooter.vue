<template>
  <v-footer app :color="theme.current.value.colors.backgroundSec" :elevation="10" height="40">
    <a
      v-for="item in items"
      :key="item.title"
      class="d-inline-block mx-2 social-link"
      :href="item.href"
      rel="noopener noreferrer"
      target="_blank"
      :title="item.title"
    >
      <v-icon :icon="item.icon" :size="item.icon === '$vuetify' ? 28 : 22" />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px"
    >
      &copy; {{ new Date().getFullYear() }} -
      <span class="d-none d-sm-inline-block">Janderson Brito</span>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  const items = [
    {
      title: 'droid-janderson',
      icon: `mdi-github`,
      href: 'https://github.com/droid-janderson',
    },
    {
      title: 'Janderson Brito',
      icon: 'mdi-linkedin',
      href: 'https://www.linkedin.com/in/janderson-brito/',
    },
  ]
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: rgba(25, 118, 210, 1)
</style>
