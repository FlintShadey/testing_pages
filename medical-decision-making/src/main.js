// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'

// Import MDI icons
import '@mdi/font/css/materialdesignicons.css'

// Vuetify styles
import 'vuetify/styles'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
