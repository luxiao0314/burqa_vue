<template>
    <div class="subject-item">
        <img v-lazy="image" class="img" />
        <div class="text">
            <div class="title">aaaa</div>
            <div class="time">2018-9-10</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"
    };
  }
};
</script>

<style>
.subject-item {
  width: 100%;
  height: 300px;
  display: block;
}
.img {
  height: 200px;
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



