import Vue from 'vue'
import App from './App.vue'

import Input from '../../src/index.js'
Vue.component(Input.name, Input)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
