<template>
  <div @click="emitClick" class="action-button">
    <span class="action-button__text">
      {{ action.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "HNegativeAction",
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
  background-color: #DB5461;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #b4454e;
  }

  .action-button__text {
    color: white;
    font-size: medium;
    font-family: sans-serif;
  }
}

</style>
