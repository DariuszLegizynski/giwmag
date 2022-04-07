import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueGtag from 'vue-gtag'
import '@/plugins/gtag'


createApp(App)
  .use(
    VueGtag,
    {
      config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID },
      pageTrackerTemplate(to) {
        return {
          page_title: to.name,
          page_path: to.path,
        }
      },
    },
    router
  )
  .use(router)
  .mount('#app')