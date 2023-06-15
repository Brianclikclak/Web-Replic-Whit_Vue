import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/index.js'


<<<<<<< HEAD
createApp(App).mount('#app')


=======
const app= createApp(App)

app.use(router)

app.mount('#app')
>>>>>>> 4ab82825f5a764657a35655eaf770742e611559f
