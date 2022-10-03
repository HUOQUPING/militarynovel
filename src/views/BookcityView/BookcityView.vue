<template>
  <div class="book-city">
    <BookcitySearch></BookcitySearch>
  </div>
</template>

<script>
import BookcitySearch from './BookcitySearch.vue'

export default {
  name: "HomeView",
  components:{
    BookcitySearch
  }
};
</script>

<style lang="scss">
.book-city {
  width: 100vw;
  height: 92vh;
  overflow: auto;
}
</style>
