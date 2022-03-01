
<template>
  <div class="sel">
    <header-item
      :hColor="accessoriesData.color"
      :hTitle="accessoriesData.title"
    ></header-item>
    {{ accessoriesData }}
  </div>
</template>
<script>
import HeaderItem from "./HeaderItem.vue";
export default {
  name: "StoreAccessories",
  components: {
    HeaderItem,
  },
  props: {
    accessoriesData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
</style>