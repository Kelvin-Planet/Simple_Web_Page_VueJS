<template>
  <div class='cell'>
      <div id='container'>
        <img v-bind:src="`${image}`" />
      </div>
      <h4>{{title}}</h4>
      <h4>{{description}}</h4>
      <h4><font color="#f68d28">{{ $t("message.more") }}</font></h4>
      <div id='bottom' />
  </div>
</template>

<script>
export default {
  name: 'InfoCell',
  props: ['title', 'description', 'image'],
}
</script>

<style>
#bottom {
  height: 10px;
}
hr {
    border: none;
    background: #f68e2a;
    height: 1px;
    width: 50px;
}
.cell > h4 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.2em;
}
#container {
   padding: 16px;
}
#container img {
   width: 100%;
}
</style>