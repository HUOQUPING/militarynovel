<template>
  <div class="comment">
    <ul>
      <li v-for="t in commentList" :key="t.commentid">
        <div class="comment-box">
          <div class="user-or-time">
            <p>
              {{t.cname}}
              <span>{{timeStampToTime(t.time)}}</span>
            </p>
          </div>
          <div class="text">
            <p>{{t.content}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["commentList"],
  methods: {
    timeStampToTime(time) {
      return new Date(time).getFullYear()+"-"+this.tenPlusZero(new Date(time).getMonth())+"-"+this.tenPlusZero(new Date(time).getDay())+" "+this.tenPlusZero(new Date(time).getHours())+":"+this.tenPlusZero(new Date(time).getMinutes())
    },
    tenPlusZero(num){
        return num > 10 ? num : '0'+num
    }
  }
};
</script>

<style lang="scss" scoped>
.comment{
    ul{
        li{
            margin-bottom: 12px;
            padding-top: 10px;
            padding-bottom: 12px;
            border-bottom: 1px solid #999;
            &:first-child{
                padding-top: 0;
            }
            .user-or-time{
                display: flex;
                margin-bottom: 12px;
                p{
                    flex: 1;
                    span{
                        color: #5f5f5f;
                        float: right;
                    }
                }
            }
        }
    }
}
</style>