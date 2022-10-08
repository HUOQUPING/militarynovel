<template>
  <div class="strip-module" v-if="bookArr != null">
    <router-view></router-view>
    <ul>
      <router-link tag="li"  v-for="(t,i) in bookArr.book_infos" :key="(t.bookid + i)" :data-id="t.bookid" :to="'/bookinfo?id='+t.bookid">
      <!-- <li v-for="t in bookArr.book_infos" :key="t.bookid" :data-id="t.bookid" :to="'/bookinfo?id='+t.bookid"> -->
        <img :src="t.coverurl" />
        <div class="text">
          <h3>{{t.bookname}}</h3>
          <p>{{t.summary}}</p>
          <span>{{t.penname}}·{{t.bookkindname}}·点击:{{t.viewcount > 10000 ? (t.viewcount/10000).toFixed(1)+'万' : t.viewcount}}·{{t.bookstatename}}</span>
        </div>
      <!-- </li> -->
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
};
</script>

<style lang="scss" scoped>
.strip-module {
  ul {
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      margin: 4px auto;
      width: 96vw;
      height: 20vh;
      img {
        width: 24vw;
        height: 19vh;
        display: block;
        border-radius: 4px;
      }
      .text {
        position: relative;
        padding: 5px 6px;

        p {
          padding-top: 3vh;
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        span {
          position: absolute;
          bottom: 10px;
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>