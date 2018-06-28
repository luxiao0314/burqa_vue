<template>
<div class="recommend-page">
    <div class="swipe-wrapper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"
      ]
    };
  }
};
</script>

<style>
.swipe-wrapper {
  width: 100%;
  height: 200px;
}
</style>
