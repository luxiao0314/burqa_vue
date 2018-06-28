<template>
<div class="subject-page">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </mt-loadmore>
</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
