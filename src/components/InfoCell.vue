<template>
  <div class='cell'>
      <div>
        <img v-bind:src="`${image}`" />
      </div>
      <h4>{{title}}</h4>
      <hr/>
      <h6>{{description}}</h6>
      <h6><font color="#f68d28">{{ $t("message.more") }}</font></h6>
  </div>
</template>

<script>
export default {
  name: 'InfoCell',
  props: ['title', 'description', 'image'],
}
</script>

<style>
hr {
    border: none;
    background: #f68e2a;
    height: 1px;
    width: 50px;
}
.cell > h4 {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 24px;
    line-height: 34px;
    font-weight: 400;
    letter-spacing: 0.2em;
}
.cell > h6 {
    margin-top: 10px;
    margin-bottom: 0px;
    font-weight: 300;
    padding: 30px;
    font-size: 18px;
    min-height: 150px;
}
</style>