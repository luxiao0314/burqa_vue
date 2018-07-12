<template>
    <div class="page">
        <header-bar text="作者作品"></header-bar>
        <div class="content">
            <img :src="author.avatar" class="header-img">
            <div class="name">{{author.name}}</div>
            <div v-for="(item,index) in otherWorks">
                <common-item-count :data="item" @itemClick="push(item.comicId)" />
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from "@/components/widget/header-bar";
import CommonItemCount from "@/components/novel/view/common-item-count";
export default {
  components: {
    HeaderBar,
    CommonItemCount
  },
  data() {
    return {
      author: this.$route.query.author,
      otherWorks: this.$route.query.otherWorks
    };
  },
  methods: {
    push(comicId) {
      this.$router.push({
        path: "/comics-detail",
        query: { data: comicId + "" }
      }); //comicId为int类型.直接传递为空
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  background-color: white;
  .content {
    margin-top: 60px;
    .header-img {
      border-radius: 50% ;
      border: 1px solid #e4e4e4;
      width: 50px;
      height: 50px;
      margin: 0 auto;
      display: table-cell;
    }
    .name {
      padding: 10px;
      text-align: center;
      font-size: 16px;
    }
  }
}
</style>

