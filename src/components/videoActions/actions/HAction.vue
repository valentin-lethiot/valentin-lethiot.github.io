<template>
  <div class="action-button">
    <div>
      {{ action.text }}
    </div>
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
  }
}
</script>

<style lang="scss" scoped>

.action-button {
  height: 100px;
  width: 100px;
  background-color: cadetblue;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
