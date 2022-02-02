<template>
  <div>
    <p v-if="label" class="hinput__label">{{ label }}</p>
    <input class="hinput__input" type="text" v-model="inputValue" @input="emitInput">
  </div>
</template>

<script>
export default {
  name: "HInput",
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      inputValue: this.getValue()
    }
  },
  methods: {
    getValue() {
      return this.value
    },
    emitInput() {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>

.hinput__label {
  margin-bottom: 2px;
  margin-top: 15px;
}

.hinput__input {
  width: 100%;
}
</style>
