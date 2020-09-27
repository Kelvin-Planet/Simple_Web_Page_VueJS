<template>
  <div>
    <slider interval=6000 animation="fade" height=100%>
    <slider-item
        v-for="(i, index) in list" :key="index" :style="i"
    >
        <img v-bind:src="`${image[index]}`"/>
    </slider-item>
    </slider>
    <Header />
    <section id='page-body'>
        <div id='spacing'/>
        <div class='clearfix'>
        <div class='left-column'>
            <InfoCell 
            image="http://www.bex.hk/images/home1.png"
            :title="$t('message.title1')"
            :description="$t('message.description1')"/>
        </div>
        <div class='right-column'>
            <InfoCell 
            image="http://www.bex.hk/images/home2.png"
            :title="$t('message.title2')"
            :description="$t('message.description2')"/>
        </div>
        </div>
    </section>
    <div id='footer'>
        <div class='clearfix'>
        <div class='left-column'>
                <p class='text-light'>
                    <strong>{{ $t("message.company_name") }}</strong>
                    <br>{{ $t("message.tel") }}
                    <br>{{ $t("message.address") }}
                </p>
        </div>
        <div class='right-column'>
                <p class='text-light'>
                    <br>
                    <a href="index.html">{{ $t("message.home") }}</a>|	
                    <a href="about.html">{{ $t("message.about") }}</a>| 	
                    <a href="product.html">{{ $t("message.product") }}</a>|	
                    <a href="service.html">{{ $t("message.service") }}</a>|	
                    <a href="TVP.html">{{ $t("message.coupon") }}</a>|	
                    <a href="contact.html">{{ $t("message.contact") }}
                        <br><small>{{ $t("message.copyright") }}</small>
                    </a>
                </p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import EasySlider from 'vue-easy-slider'
import { Slider, SliderItem } from 'vue-easy-slider'
import Header from './Header.vue'
import InfoCell from './InfoCell.vue'

Vue.use(EasySlider)
export default {
    name: 'Home',
    components: {
    Slider,
    SliderItem,
    Header,
    InfoCell,
    },
    data() {
    return {
      image: [
          'http://www.bex.hk/images/668523284.jpg',
          'http://www.bex.hk/images/530198406.jpg'],
      list: [
        { width: '100%', height: '100%' },
        { width: '100%', height: '100%' },
      ],
    }
  },
}
</script>

<style>
.slider {
    z-index: -1;
    width: 100%;
    height: 100%;
}
#spacing {
    height: 100px;
}
#page-body {
    max-width: calc(100% - 80px);
    width: 1150px;
    margin: 0 auto;
}
#footer {
    background-color: #525252;
    padding-left: 40px;
    padding-right: 40px;
}
.left-column {
    float: left;
    width: 50%;
    height: auto;
}
.right-column {
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
slider img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
@media only screen and (max-width: 1024px) {
    .left-column {
        float: none;
        width: 100%;
        height: auto;
    }
    .right-column {
        float: none;
        width: 100%;
        height: auto;
    }
}
</style>