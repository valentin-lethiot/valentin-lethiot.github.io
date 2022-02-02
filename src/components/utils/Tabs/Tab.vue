<template>
  <button @click="emitClick" :class="[
      'tabButton',
      {
        'tabButton--active': isActive
      }
    ]">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Tab",
  props: {
    text: {
      type: String,
      require: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>

.tabButton {
  border: none;
  font-size: medium;
  font-weight: bold;
  color: #0015ff;
  height: 40px;
  width: 150px;
  background: none;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #bbd4ff;
  }
}

.tabButton--active {
  border-bottom: 3px solid #0015ff;

  &:hover {
    cursor: default;
    background: none;
  }
}
</style>
