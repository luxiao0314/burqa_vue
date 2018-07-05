<template>
    <div>
        <div class="title">
            <div class="time">最后一章更新于2018-07-05</div>
            <div class="sort">正序</div>
        </div>

        <cell-text v-for="item in chapterlist" :key="item.chapter_id" :chapter="item" />
    </div>
</template>

<script>
import CrossLine from "@/components/widget/cross-line";
import CellText from "@/components/novel/view/cell-text";
export default {
  components: {
    CellText,
    CrossLine
  },
  props: {
    chapterlist: Array
  }
};
</script>


<style lang="scss" scoped>
.title {
  padding: 10px;
  flex-direction: row;
  display: flex;
  .time {
    flex: 1;
    font-size: 10px;
  }
  .sort {
    font-size: 10px;
  }
}
</style>

