import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VCalendar } from 'vuetify/labs/VCalendar'

const vuetify = createVuetify({
  components: {
    ...components,
    VCalendar
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  }
})

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(vuetify)

app.mount('#app');
