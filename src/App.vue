<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Home />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Page01 from './components/Page01.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Lato', 'Helvetica Neue','Noto Sans TC', serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #393939;
  font-size: 17.5px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 1px;
  /* color: #2c3e50;
  margin-top: 60px; */
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body > #app {
  height: 100%;
}
body > #app > div {
  height: 100%;
}
*{box-sizing: border-box;}
img {
  pointer-events: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>
