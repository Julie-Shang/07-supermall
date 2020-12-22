import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from "vue-lazyload"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import toast from "@/components/common/toast/index.js"

Vue.use(ElementUI);

Vue.use(VueLazyLoad)

//添加事件总线对象
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
