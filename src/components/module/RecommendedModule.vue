<template>
  <div class="recommended">
    <ul>
      <li v-for="t in recommendList" :key="t.bookid">
        <img :src="t.coverurl" />
        <span>{{t.bookname}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    recommendList(newV) {
      console.log(newV);
    }
  },
  props: ["recommendList"]
};
</script>

<style lang="scss" scoped>
.recommended {
  width: 100vw;
  height: 23.5vh;
  margin: 0px auto;
  padding: 1.5vh 0px;
  background-color: #fff;
  ul {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    li {
      flex: 0 0 20vw;
      margin: 0 12px;
      text-align: center;
      img {
        display: block;
        width: 20vw;
        height: 15vh;
      }
      span {
        display: block;
        margin: 1vh 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>