import Vue from 'vue'
import App from './App.vue'

import '../src/styles/app.scss'

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')