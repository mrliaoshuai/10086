<template>
  <div class="profile">
    <swiper>
      <swiper-item v-for="(item, index) in saveImage" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "Profile",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      saveImage: [
        "/img/proswp0true.png",
        "/img/proswp1true.jpg",
        "/img/proswp2true.png",
      ],
    };
  },
  created() {},
};
</script>