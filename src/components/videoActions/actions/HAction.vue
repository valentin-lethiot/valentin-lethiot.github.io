<template>
  <div @click="emitClick" class="action-button">
    <span class="action-button__text">
      {{ action.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "HAction",
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
  height: 100px;
  width: 100px;
  background-color: #3C6997;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: end;

  &:hover {
    cursor: pointer;
    background-color: #327bc2;
  }

  .action-button__text {
    color: white;
    font-size: large;
    font-family: sans-serif;
  }
}

</style>
