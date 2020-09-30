<template>
  <div class='cell'>
      <div id='container'>
        <img v-bind:src="`${image}`" />
      </div>
      <div>{{title}}</div>
      <div>{{description}}</div>
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
#container {
   padding: 16px;
}
#container img {
   width: 100%;
}
</style>