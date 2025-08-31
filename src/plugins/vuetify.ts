/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'system',
    themes: {
      light: {
        colors: {
          background: '#F8F9FD',
          backgroundSec: '#F8F9FD',
          snackbar: '#022370',
          primary: '#022370',
          secondary: '#FF5252',
          tertiary: '#F8F9FD',
          text_primary: '#232323',
          text_secondary: '#F8F9FD',
          text_tertiary: '#5E5e5e',
          hover: '#DADDEB',
          hoverBtn: '#ff5252c9',
          boxShadow: '0px 0px 4px 4px rgba(48, 48, 48, 0.18)',
        },
      },
      dark: {
        colors: {
          background: '#101729',
          backgroundSec: '#192340',
          snackbar: '#101729',
          primary: '#3FBC44',
          secondary: '#F87D01',
          tertiary: '#192340',
          text_primary: '#F8F9FD',
          text_secondary: '#232323',
          text_tertiary: '#C1B9B9',
          hover: '#233460',
          hoverBtn: '#f87d01b7',
          boxShadow: '0px 0px 4px 4px rgba(255, 255, 255, 0.25)',
        },
      },
    },
  },
})
