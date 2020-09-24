<template>
  <div>
    <div id='myHeader' class="header">
        <div id='header-inner' class='clearfix'>
            <div id="logo">
                <img id="light-logo" src="http://www.bex.hk/images/Logo.png">
            </div> 
            <div id="menu" class="">
                <div class="menu-inner"></div>
                <a href="#" v-on:click="onMenuClick" class="responsive-nav-toggle">
                    <div class="hamburger"/>
                    <div class="hamburger"/>
                    <div class="hamburger"/>
                </a>
            </div>
        </div>
    </div>
      <section id='Banner'>
          <img src='http://www.bex.hk/images/668523284.jpg'/>
      </section>
      <section id='page-body'>
          <div id='spacing'/>
          <div id='description'>
              科技每天都在發展和變化。要在這個知識型社會突圍而出，必須有賴於能幫助你提升效率及簡化工作流程的資訊科技方案。這就是滙智系統的工作。我們可以使你在競爭中獲得絕對的優勢，秘訣很簡單，就是為你提供更優質的軟件產品、設備與服務。而我們的顧問團隊具備專業知識及豐富經驗，更開發了一系列的專業軟件，包括[MIZAR外勤工作管理系統]、[MAPS會議室預訂服務系統]、[ORION OFFICE批發管理系統]、[ORION POS零售銷售系統]、 [SEEDLING幼稚園管理系統]、[STAX盤點系統]等，以及各類型度身訂造的軟件開發及網頁設計服務。
          </div>
          <div id='spacing'/>
          <div class='clearfix'>
            <div id='left-column'>
                <Cell 
                image="http://www.bex.hk/images/home1.png"
                title="網頁設計" 
                description="一個出色的網站是任何公司或組織不可或缺的部分。精心設計兼且內容豐富的網站能提升公司形象，更能在一瞬間把你的公司推廣至世界各地，讓你面向無限量的新客戶，從而帶來商機。"/></div>
            <div id='right-column'>
                <Cell
                image="http://www.bex.hk/images/home2.png"
                title="手機應用程式設計" 
                description="我們開發的手機應用程式，將與雲端系統整合，讓前後線工作無縫連接。程式更可結合全球定位系統，配合圖片、視頻及聲音等，讓你進一步跨越地域和時間限制，實時存取系統信息，達致最高效益。"/></div>
          </div>
          <div id='spacing'/>
      </section>
      <div id='footer'>
          <div id='copyright' class='clearfix'>
            <div id='left-column' class='align-left'>
                <p class='text-light'>
                    <strong>BEX Solutions Ltd.</strong>
                    <br>T: +852 3469 9699	|	F: +852 3186 2888	|	E: enquiry@bex.hk
                    <br>荔枝角永康街79號創匯國際中心5/F A室
                </p>
            </div>
            <div id='right-column' class='align-right'>
                <p class='text-light'>
                    <br>
                    <a href="index.html">首頁</a>	|	
                    <a href="about.html">關於我們</a>		| 	
                    <a href="product.html">產品</a>	|	
                    <a href="service.html">服務</a>	|	
                    <a href="TVP.html">科技券</a>	|	
                    <a href="contact.html">聯絡我們
                        <br><small>Copyright © 2017 Bex 匯智系統 版權所有</small>
                    </a>
                </p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Cell from './Cell.vue'
export default {
  name: 'Page01',
  components: {
    Cell
  },
  methods: {
    onMenuClick () {
        var menu_inner = document.getElementsByClassName("menu-inner")[0]
        if (menu_inner.classList.contains("menu-inner-open")){
            menu_inner.classList.remove("menu-inner-open");
        }else{
            menu_inner.classList.add("menu-inner-open");
        }
    },
    handleScroll () {
        var header = document.getElementById("myHeader");
        var logo = document.getElementById("logo");
        if (window.scrollY>10) {
            header.classList.add("header-solid");
            logo.classList.add("logo-left");
        }else{
            header.classList.remove("header-solid");
            logo.classList.remove("logo-left");
        }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
#Banner {
    width: 100%;
    height: 100%;
}
#Banner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#spacing {
    height: 100px;
}
#page-body {
    max-width: calc(100% - 80px);
    width: 1150px;
    margin: 0 auto;
}
#left-column {
    float: left;
    width: 50%;
    height: auto;
}
#right-column {
    float: left;
    width: 50%;
    height: auto;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0;
}
#footer {
    background-color: #525252;
    padding-left: 40px;
    padding-right: 40px;
}
#copyright {
    padding: 30px 0;
}
.align-left{
    text-align: left;
}
.align-right{
    text-align: right;
}
.text-light {
    color: rgba(255, 255, 255, .80);
}
a {
    text-decoration: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0.0);
    color: #c9c9c9;
}
.header-solid {
    background-color: rgba(255, 255, 255, 0.8);
    top: 0px !important;
    left: 0px !important;
    width: 100% !important;
    transition: all 0.5s;
}
.header {
    position: fixed;
    top: 30px;
    left: 30px;
    width: calc(100% - 60px);
    transition: all 0.5s;
}
#header-inner > #logo {
    float: left;
    margin-left: 30px;
    margin-top: 15px;
    max-width: 60px;
    transition: all 0.5s;
}
.logo-left {
    margin-left: 60px !important;
    transition: all 0.5s;
}
#light-logo {
    max-width: null;
    object-fit: cover;
}
#menu {
    opacity: 0;
    float: right;
    margin-right: 30px;
    margin-top: 30px;
}
.hamburger {
    margin-top: 6px;
    width: 22px;
    height: 2px;
    background-color: #f68d28;
}
.responsive-nav-toggle {
    display: block;
    z-index: 1;
}
nav#main-nav ul {
    list-style: none;
}
.menu-inner .menu-inner-open {
    z-index: -1;
    position: fixed;
    top: 0;
    right: -350;
    height: 100%;
    width: 350px;
    transition: right 0.5s ease;
    background: rgba(82, 82, 82, 0.9);
    opacity: 0;
}
@media only screen and (max-width: 1024px) {
    .logo-left {
        margin-left: 30px !important;
    }
    .header {
        position: fixed;
        top: 0px !important;
        left: 0px !important;
        width: 100% !important;
        margin-left: 0!important;
        height: auto !important;
    }
    #light-logo {
        max-width: 60px;
        object-fit: cover;
    }
    #left-column {
        float: none;
        width: 100%;
        height: auto;
    }
    #right-column {
        float: none;
        width: 100%;
        height: auto;
    }
    .menu-inner {
        z-index: -1;
        position: fixed;
        top: 0;
        right: -350px;
        height: 100%;
        width: 350px;
        transition: right 0.5s ease;
        background: rgba(82, 82, 82, 0.9);
    }
    .menu-inner-open {
        z-index: -1;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 350px;
        transition: right 0.5s ease;
        background: rgba(82, 82, 82, 0.9);
    }
    #menu {
        opacity: 1;
    }
}
</style>

