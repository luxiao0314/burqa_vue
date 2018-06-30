<template>
    <div class="subject-item">
        <img v-lazy="data.cover" class="img"/>
        <div class="text">
            <div class="title">{{data.comicName}}</div>
            <div class="time">{{data.create_time}}</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    data:{
      type:Object
    }
  }
};
</script>

<style>
.subject-item {
  width: 100%;
  display: block;
}
.img {
  height: 150px;
}
.time {
  float: right;
  color: darkgray;
}
.title {
  float: left;
  color: black;
}
.text {
  padding: 10px;
}
</style>



