<template>
  <button class="hbutton" @click.prevent="click">{{ text }}</button>
</template>

<script>
export default {
  name: "HButton",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>

.hbutton {
  border: none;
  background-color: #3C6997;
  color: white;
  min-width: 100px;
  min-height: 50px;
  padding: 5px;
  font-weight: normal;
  font-size: large;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: #2c5bad;
  }

  &:active {
    cursor: pointer;
    background-color: #94aeda;
  }
}

</style>
