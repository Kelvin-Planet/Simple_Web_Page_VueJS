<template>
  <div class='m-button'>{{title}}
    <div :id="title"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderButton',
  props: ['title'],
}
</script>

<style>
    .m-button {
        background-color: #e60012bb;
        color: white;
        padding: 0px 8px;
        border-radius: 6px;
        margin-bottom: 8px;
    }
</style>