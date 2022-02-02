<template>
  <button class="action-button">
    {{ action.text }}
  </button>
</template>

<script>
export default {
  name: "HAction",
  props: {
    action: {
      type: Object,
      required : true
    }
  }
}
</script>

<style lang="scss" scoped>

.action-button {
  height: 100px;
  width: 100px;
  background-color: cadetblue;
  border: 1px solid rebeccapurple;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.action-button:hover {
  cursor: pointer;
  background-color: #4e8283;
}

.action-button:active {
  background-color: #3b5d5e;
  border: none;
}
</style>
