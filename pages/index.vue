<template>
  <section class="container">
    <h1>Axios interceptors memory leaks</h1>

    <div class="posts">
      <h2>post list</h2>

      <div class="posts__list">
        <item v-for="item in posts" :item="item" :key="item.id"/>
      </div>
    </div>
  </section>
</template>

<script>
import Item from '~/components/item';

export default {
  components: {
    Item,
  },
  data() {
    return {
      posts: [],
    }
  },
  async asyncData({ axios }) {

    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => response.data);

    return {
      posts,
    };
  }
}
</script>

<style>
  .posts {
    margin-top: 30px;
  }
  .posts h2 {
    margin-bottom: 20px;
  }
</style>

