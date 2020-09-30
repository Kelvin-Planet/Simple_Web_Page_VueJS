import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

const messages = {
  ch: {
    message: {
      intro: '世界 科技每天都在發展和變化。要在這個知識型社會突圍而出，必須有賴於能幫助你提升效率及簡化工作流程的資訊科技方案。這就是滙智系統的工作。我們可以使你在競爭中獲得絕對的優勢，秘訣很簡單，就是為你提供更優質的軟件產品、設備與服務。而我們的顧問團隊具備專業知識及豐富經驗，更開發了一系列的專業軟件，包括[MIZAR外勤工作管理系統]、[MAPS會議室預訂服務系統]、[ORION OFFICE批發管理系統]、[ORION POS零售銷售系統]、 [SEEDLING幼稚園管理系統]、[STAX盤點系統]等，以及各類型度身訂造的軟件開發及網頁設計服務。',
      title1: 'Game & Watch: 超級瑪利歐兄弟',
      description1: '2020.10.16（五）發售',
      title2: '瑪利歐賽車實況：家庭賽車場',
      description2: '2020.11.13（五）發售',
      more: '官方網頁',
      company_name: 'BEX Solutions Ltd.',
      tel: 'T: +852 3469 9699 | F: +852 3186 2888 | E: enquiry@bex.hk',
      address: '荔枝角永康街79號創匯國際中心5/F A室',
      home: '首頁',
      about: '關於我們',
      product: '產品',
      service: '服務',
      coupon: '科技券',
      contact: '',
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
