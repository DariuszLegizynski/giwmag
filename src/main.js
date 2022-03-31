import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

createApp(App)
  .use(VueGtag, {
    config: { id: 'G-3VY8GTXDNJ' },
  })
  .use(router)
  .mount('#app')