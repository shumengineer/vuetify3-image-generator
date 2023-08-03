/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#151515',
          secondary: '#ffffff',
        },
      },
      dark: {
        colors: {
          primary: '#eaeaea',
          secondary: '#733cff',
          background: "#2c2c2c", // If not using lighten/darken, use base to return hex
        }
      },
    },
  },
})
