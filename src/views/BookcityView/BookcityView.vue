<template>
  <div class="book-city">
    <router-view></router-view>
    <BookcitySearch>
      <router-link to="bookcity-search" ></router-link>
    </BookcitySearch>
  </div>
</template>

<script>
import BookcitySearch from "@/components/BookcitySearch.vue";
export default {
  name: "HomeView",
  components: {
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
