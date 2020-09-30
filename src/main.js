import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

const messages = {
  ch: {
    message: {
      title1: 'Game & Watch: 超級瑪利歐兄弟',
      description1: '2020.10.16（五）發售',
      title2: '瑪利歐賽車實況：家庭賽車場',
      description2: '2020.11.13（五）發售',
      title3: '超級瑪利歐兄弟™ 35',
      description3: '2020.10.1（四）發布',
      title4: '超級瑪利歐 ３Ｄ世界 ＋ 狂怒世界',
      description4: '2021.2.12（五）發售',
      copyright: '© Nintendo (Hong Kong) Ltd.Games are properties of their respective owners.',
    }
  },
}

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'ch',
  messages,
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
