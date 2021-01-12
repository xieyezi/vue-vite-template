import { createApp } from 'vue'
import store, { key } from './store'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.mount('#app')
