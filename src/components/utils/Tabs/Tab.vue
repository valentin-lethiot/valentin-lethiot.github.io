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
  color: #2c5bad;
  height: 40px;
  width: 150px;
  background: none;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #2c5bad;
    color: white;
  }
}

.tabButton--active {
  border-bottom: 3px solid #2c5bad;

  &:hover {
    cursor: default;
    background: none;
    color: #2c5bad;
  }
}
</style>
