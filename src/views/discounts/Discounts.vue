<template>
  <div class="discounts">
    <discounts-image></discounts-image>
    <scroll
      class="scroll"
      ref="scroll"
      :probeType="3"
      @scroll="currentPosition"
    >
      <discounts-item :discountsData="saveDiscounts" @imageLoad="imageRefresh">
      </discounts-item>
    </scroll>
    <back-top v-show="isShow" @click.native="topClick"></back-top>
  </div>
</template>
<script>
import DiscountsItem from "./DiscountsItem";
import DiscountsImage from "./discountsCopms/DiscountsImage.vue";
import BackTop from "components/common/backtop/BackTop.vue";
import Scroll from "components/common/scroll/Scroll";
import { debounce } from "common/utils";
export default {
  name: "Discounts",
  data() {
    return {
      saveDiscounts: {},
      debounce: {},
      isShow: false,
    };
  },
  components: {
    DiscountsItem,
    DiscountsImage,
    BackTop,
    Scroll,
  },
  methods: {
    getDiscounts() {
      this.$http.get("/discounts").then((res) => {
        this.saveDiscounts = res.data;
        // console.log(JSON.stringify(this.saveDiscounts, null, 2));
      });
    },
    imageRefresh() {
      this.debounce();
    },
    currentPosition(pos) {
      -pos.y >= 800 ? (this.isShow = true) : (this.isShow = false);
    },
    topClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
  created() {
    this.getDiscounts();
  },
  mounted() {
    this.debounce = debounce(this.$refs.scroll.refresh, 20);
  },
};
</script>
<style scoped>
.discounts {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.scroll {
  height: calc(100% - 49px);
}
</style>