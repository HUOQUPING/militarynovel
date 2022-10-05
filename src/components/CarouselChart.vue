<template>
  <div class="carousel">
    <transition-group class="container" tag="ul" name="move">
      <li v-for="t in imgArr[9].book_infos" :key="t.bookid">
        <img :src="t.coverurl" />
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: ["imgArr"],
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 400px;
  height: 200px;
  overflow: hidden;
}

.carousel ul {
  position: absolute;
  top: 0;
  left: 0%;
  width: 1000%;
}

.carousel ul li {
  float: left;
}

.carousel ul li img {
  display: block;
  width: 100%;
}

.buffer {
  transition: left 0.3s;
}
</style>