<template>
    <div class="comment">
        <div class="top">
            <img :src="data.face">
            <div class="name">{{data.nickname}}</div>
            <div class="time">2016-1-12</div>
        </div>
        <div class="comment-content">{{data.content_filter}}</div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  flex-direction: column;
  display: flex;
  background: #F9F9F9;
  border-radius: 10px;
  .top {
    flex-direction: row;
    display: flex;
    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
    .name {
      color: gray;
      font-size: 12px;
      margin-top: 7px;
      margin-left: 10px;
      flex: 1;
    }
    .time {
      color: gray;
      font-size: 12px;
      margin-top: 7px;
    }
  }
  .comment-content {
    margin-top: 5px;
    font-size: 12px;
  }
}
</style>


