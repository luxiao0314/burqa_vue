<template>
  <div class="page">

    <div class="header">
      <i class="icon-arrow_lift"></i>
    </div>

    <img :src="data.cover" class="img-bg">

    <div class="item">
      <div>{{data.name}}</div>
      <div>{{data.author}}</div>
      <div>{{this.getTags(data.tags)}}</div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: this.$route.query.data
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
      // this.get("v3/appV3_3/ios/phone/list/commonComicList?argName=detect&argValue=12&sexType=3",{
      //     argValue: this.argValue,
      //     page: this.page
      //   }
      // ).then(res => {});
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


