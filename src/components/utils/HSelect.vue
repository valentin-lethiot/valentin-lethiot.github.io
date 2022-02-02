<template>
  <div>
    <p class="hselect__label">Poste</p>
    <select class="hselect__select" @change="emitChange" v-model="selectedValue">
      <option v-for="(option, index) of options" :key="index" :value="option.value"> {{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "HSelect",
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  data () {
     return {
       selectedValue : ''
     }
  },
  methods :{
    emitChange() {
      this.$emit('input', this.selectedValue)
    }
  }
}
</script>

<style scoped>
.hselect__label {
  margin-bottom: 2px;
  margin-top: 15px;
}

.hselect__select {
  width: 100%;
}
</style>
