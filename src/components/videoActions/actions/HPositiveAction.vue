<template>
  <div @click="emitClick" class="action-button">
    <span class="action-button__text">
      {{ action.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "HPositiveAction",
  props: {
    action: {
      type: Object,
      required : true
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

.action-button {
  height: 50px;
  width: 80px;
  background-color: #74b14d;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #5e8d3e;
  }

  .action-button__text {
    color: white;
    font-size: medium;
    font-family: sans-serif;
  }
}

</style>
