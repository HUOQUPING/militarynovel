<template>
  <div class="book-module" v-if="bookArr != null">
    <router-view></router-view>
      <ul>
        <router-link
          tag="li"
          v-for="(t,index) in bookArr.book_infos"
          :key="t.bookid"
          :data-id="t.bookid"
          v-show="index<=3"
          :to="'/bookinfo?id='+t.bookid"
        >
          <img :src="t.coverurl" />
          <p>{{t.bookname}}</p>
          <span>{{t.penname}}</span>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: ["bookArr"],
  created() {},
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.book-module {
  padding-bottom: 18px;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      width: 20%;
      flex: 0 0 22%;
      img {
        width: 100%;
        height: 80%;
        border-radius: 4px;
      }
      p {
        margin: 2px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      span {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>