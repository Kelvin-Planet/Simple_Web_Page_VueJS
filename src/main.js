import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

const messages = {
  ch: {
    message: {
      intro: '世界 科技每天都在發展和變化。要在這個知識型社會突圍而出，必須有賴於能幫助你提升效率及簡化工作流程的資訊科技方案。這就是滙智系統的工作。我們可以使你在競爭中獲得絕對的優勢，秘訣很簡單，就是為你提供更優質的軟件產品、設備與服務。而我們的顧問團隊具備專業知識及豐富經驗，更開發了一系列的專業軟件，包括[MIZAR外勤工作管理系統]、[MAPS會議室預訂服務系統]、[ORION OFFICE批發管理系統]、[ORION POS零售銷售系統]、 [SEEDLING幼稚園管理系統]、[STAX盤點系統]等，以及各類型度身訂造的軟件開發及網頁設計服務。',
      title1: '網頁設計',
      description1: '一個出色的網站是任何公司或組織不可或缺的部分。精心設計兼且內容豐富的網站能提升公司形象，更能在一瞬間把你的公司推廣至世界各地，讓你面向無限量的新客戶，從而帶來商機。',
      title2: '手機應用程式設計',
      description2: '我們開發的手機應用程式，將與雲端系統整合，讓前後線工作無縫連接。程式更可結合全球定位系統，配合圖片、視頻及聲音等，讓你進一步跨越地域和時間限制，實時存取系統信息，達致最高效益。',
      more: '了解更多',
      company_name: 'BEX Solutions Ltd.',
      tel: 'T: +852 3469 9699 | F: +852 3186 2888 | E: enquiry@bex.hk',
      address: '荔枝角永康街79號創匯國際中心5/F A室',
      home: '首頁',
      about: '關於我們',
      product: '產品',
      service: '服務',
      coupon: '科技券',
      contact: '聯絡我們',
      copyright: 'Copyright © 2017 Bex 匯智系統 版權所有',
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
