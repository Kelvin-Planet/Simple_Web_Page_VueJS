<template>
  <div id='header'>
    <div id="logo">
        <img id="light-logo" src="https://cdn.mos.cms.futurecdn.net/AfGovVvoB7pdbJcxGwnAPY-1200-80.jpg">
    </div> 
    <div id="menu-button">
        <div id="menu-inner">
        </div>
        <div id='container-img' v-on:click="onMenuClick">
            <img src='https://www.nintendo.com.hk/switch/mario/assets/images/common/skin/default/header_menu_on.png' />
            <img src='https://www.nintendo.com.hk/switch/mario/assets/images/common/skin/smb/header_menu_on.png' />
        </div>
    </div>
    <!-- <div id='h-list'>
        <ul>
        </ul>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'Header',
    components: {
    },
    methods: {
        onMenuClick () {
            var menu_inner = document.getElementById("menu-inner");
            if (menu_inner.classList.contains("menu-inner-open")){
                menu_inner.classList.remove("menu-inner-open");
            }else{
                menu_inner.classList.add("menu-inner-open");
                menu_inner.style.opacity = 1;
            }
        },
        handleScroll () {
            var header = document.getElementById("header");
            if (window.scrollY>10) {
                header.classList.add("header-solid");
            }else{
                header.classList.remove("header-solid");
            }
        },
        handleResize () {
            let w = document.documentElement.clientWidth;
            console.log(w);
            if (w<768 && !document.getElementById("menu-inner").classList.contains("menu-inner-open")) {
                document.getElementById("menu-inner").style.opacity = 0;
            }
        }
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize)
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style>

#menu-inner ul {
    position: absolute;
    list-style: none;
    top: 50%;
    transform: translateY(-50%);
}
#menu-inner ul li {
    color: #ffffff;
    text-align: left;
}
#menu-inner ul li:hover {
    color: #f68d28;   
}

#h-list {
    float: right;
    display: block;
}
#h-list ul {
    list-style: none;
    overflow: hidden;
}
#h-list ul li {
    float: right;
    margin-left: 24px;
    margin-top: 16px;
}
#h-list li:hover {
    color: #f68d28;   
}
#header {
    z-index: 10;
    position: fixed;
    top: 30px;
    left: 30px;
    width: calc(100% - 60px);
    transition: all 0.5s;
    /* border: brown 3px solid; */
    padding: 16px;
}
.header-solid {
    background-color: rgba(255, 255, 255, 0.8);
    top: 0px !important;
    left: 0px !important;
    width: 100% !important;
    transition: all 0.5s;
    padding-left: 46px !important;
}
#logo {
    float: left;
}
#light-logo {
    max-width: 130px;
    object-fit: cover;
}
#menu-button {
    height: 60px;
    width: 60px;
    float: right;
    margin: 0px;
    margin-right: 0px;
    opacity: 0;
    display: none;
    transition: 0.3s;
}
#container-img {
    position: relative;
    width: 60px;
    height: 60px;
}
#menu-button img {
    position: absolute;
    width: 60px;
    top: 0px;
    left: 0px;
}
#menu-button img:last-of-type {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -webkit-transition: opacity 0.5s ease-in-out;
}
#menu-button:hover img:last-of-type {
  opacity: 0;
}

#menu-inner {
    z-index: -1;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: -330px;
    width: 330px;
    transition: right 0.5s ease;
    background-color: #e60012;
    opacity: 1;
}
.menu-inner-open {
    right: 0px !important;
    transition: right 0.5s ease;
    opacity: 1;
}
.hamburger {
    margin-top: 6px;
    width: 22px;
    height: 2px;
    background-color: #f68d28;
}

@media only screen and (max-width: 1024px) {
    #light-logo {
        max-width: 100px;
        object-fit: cover;
    }
    #menu-button {
        opacity: 1;
        display: block;
    }
    #h-list {
        display: none;
    }
}

@media only screen and (max-width: 768px) {
    #menu-inner {
        z-index: -1;
        position: fixed;
        top: 0px;
        bottom: 0px;
        right: -100%;
        width: 100%;
        background-color: #e60012cc;
        opacity: 1;
    }
    .menu-inner-open {
        width: 100%;
        right: 0px !important;
        opacity: 1;
    }
}

</style>