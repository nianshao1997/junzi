import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import Nav from './components/Nav'
import Show from './components/Show'
import Top from './components/Top'

Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Show', Show)
Vue.component('Top', Top)

Vue.use(ElementUI)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')