import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from 'axios'

const app = createApp(App)

let ifDEV = process.env.NODE_ENV === "development"
const baseURL = ifDEV?'http://localhost:4000':''
axios.defaults.baseURL = baseURL
installElementPlus(app)
axios.defaults.withCredentials = true //让axios携带cookie
app.config.globalProperties.$axios = axios
app.use(store).use(router).mixin({
    data(){
      return {
        baseURL
      }
    }
  }).mount('#app')