import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vue from 'vue'
import VueAgile from 'vue-agile'


createApp(App).use(store).use(VueAgile).use(router).mount('#app')
