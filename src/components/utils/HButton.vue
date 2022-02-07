<template>
  <button
      :class="[
          'hbutton', {
          'hbutton--blue': color === 'blue',
          'hbutton--red': color === 'red',
          'hbutton--green': color === 'green',
          'hbutton--disabled': disabled === true,
      }]"
      @click.prevent="click"
      :disable="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "HButton",
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    },
    disabled: {
      type: Boolean,
      default: false
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
  min-width: 100px;
  min-height: 30px;
  padding: 5px;
  font-weight: normal;
  font-size: large;
  border-radius: 8px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #2c5bad;
  }

  &:active {
    cursor: pointer;
    background-color: #94aeda;
  }
}

.hbutton--blue {
  background-color: #3C6997;
  color: white;

  &:hover {
    background-color: #2c5bad;
  }

  &:active {
    background-color: #94aeda;
  }
}

.hbutton--green {
  background-color: #74b14d;
  color: white;

  &:hover {
    background-color: #64d211;
  }

  &:active {
    background-color: #8ab071;
  }
}

.hbutton--red {
  background-color: #DB5461;
  color: white;

  &:hover {
    background-color: #da2f3e;
  }

  &:active {
    background-color: #e5838c;
  }
}

.hbutton--disabled {
  background-color: #D8D8F6;

  &:hover {
    background-color: #D8D8F6;
    cursor: default;
  }

  &:active {
    background-color: #D8D8F6;
    cursor: default;
  }
}

</style>
