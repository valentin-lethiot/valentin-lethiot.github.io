<template>
  <div class="tabsListComponent">
    <tab
        v-for="(tab, index) of tabs"
        :key="index"
        :text="tab"
        :is-active="getIsActive(index)"
        @click="changeSelectedTab(index)"
    />
  </div>
</template>

<script>
import Tab from "./Tab";
export default {
  name: "TabsList",
  components: {
    Tab
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedTab: 0
    }
  },
  methods: {
    getIsActive(index) {
      return index === this.selectedTab
    },
    changeSelectedTab(index) {
      if (index != this.selectedTab) {
        this.selectedTab = index
        this.$emit('tabChanged', index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabsListComponent {
  display: flex;
}
</style>
