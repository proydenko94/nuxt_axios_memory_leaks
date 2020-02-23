<template>
  <div class="posts__item">
    <h2>{{item.id}}. {{item.title}}</h2>
    <p>{{item.body}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
      }
    }
  }
</script>

<style scoped>
  .posts__item {
    top: 20px;
    border-bottom: 1px solid #aaa;
    width: 500px;
    padding: 20px 0;
  }

  .posts__item h2 {
    margin: 0 0 10px 0;
  }

  .posts__item p {
    color: #777;
    font-size: 14px;
    line-height: 1.4;
  }
</style>
