<template>
    <div class="news-list">
        <!-- <span>{{data.timeStamp | formatDate}}</span> -->
        <div>{{data.weekDay}}</div>
        <div v-for="item in data.dayItemDataList">
            <img :src="item.cover" class="img" />
        </div>
    </div>
</template>

<script>
import { formatDate } from "../../../utils/date.js";
export default {
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.news-list {

}
.img {
    width: 100%;
    height: 100%;
}
</style>



