<template>
  <div class="page">

    <div class="header">
      <i class="icon-arrow_lift"></i>
    </div>

    <img :src="comic.wideCover" class="img-bg">

    <div class="item">
      <div>{{comic.name}}</div>
      <div>{{author.name}}</div>
      <div>{{this.getTags(comic.theme_ids)}}</div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      comicid: this.$route.query.data,
      comic: Object,
      author: Object
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getTags(tags) {
      var tag_tags = "";
      if (tags != null) {
        tags.forEach(element => {
          tag_tags += element + " ";
        });
      }
      return tag_tags;
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/comic/detail_static_new", {
        comicid: this.comicid
      }).then(res => {
        this.comic = res.returnData.comic;
        this.author = res.returnData.comic.author;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  .header {
    padding: 10px;
    width: 100%;
    position: absolute;
  }
  img {
    width: 100%;
  }
}
</style>


