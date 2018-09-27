// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    data: {
	albums: []
    },
    components: { App },
    template: '<App/>'
})
