<template>
  <button :class="[
      'roundedButton',
      {
        'roundedButton--red': getBackgroundColor === 'red',
        'roundedButton--gray': getBackgroundColor === 'gray',
        'roundedButton--small': getSize === 'small',
        'roundedButton--medium': getSize === 'medium'
      }
    ]" @click="emitClick">
    <img :class="[
          'roundedButton__content',
          {
            'roundedButton__content--small': getSize === 'small',
            'roundedButton__content--medium': getSize === 'medium'
          }
        ]"
      :src="getIcon"
    />
  </button>
</template>

<script>
export default {
  name: "RoundedButton",
  props: {
    options: {
      type: Object,
      required: false
    },
    size: {
      type: String,
      required: false
    }
  },
  methods: {
    emitClick() {
      this.$emit('click')
    }
  },
  computed: {
    getBackgroundColor() {
      return this.options?.backgroundColor
    },
    getIcon() {
      return require(`@/assets/icons/${this.options?.icon}.svg`)
    },
    getSize() {
      return this.size
    }
  }
}
</script>

<style lang="scss" scoped>
.roundedButton {
  background-color: #3C6997;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 5px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #2c5bad;
    cursor: pointer;
  }

  &:active {
    background-color: #94aeda;
    cursor: pointer;
  }
}

.roundedButton--red {
  background-color: red;

  &:hover {
    background-color: #F87E7E;
  }

  &:active {
    background-color: #F87E7E;
    border: 3px solid #fc0000;
  }
}

.roundedButton--gray {
  background-color: #93a5c0;
  color: black;

  &:hover {
    background-color: #d5d2d2;
  }

  &:active {
    background-color: #d5d2d2;
    border: 3px solid #9d9a9a;
  }
}

.roundedButton--small {
  height: 20px;
  width: 20px;
}

.roundedButton--medium {
  height: 30px;
  width: 30px;
}

.roundedButton__content {
  height: 50px;
  text-align: center;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(34deg) brightness(103%) contrast(103%);
  transform: rotate(90deg) rotateX(3.142rad);
}

.roundedButton__content--small {
  width: 15px;
  height: 15px;
}

.roundedButton__content--medium {
  width: 20px;
  height: 20px;
}
</style>
