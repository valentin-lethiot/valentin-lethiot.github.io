<template>
  <div class="toggleSwitchDiv">
    <div @click="emitLeftClick"
         :class="[
        'toggleSwitchDiv__leftDiv',
        'toggleSwitchDiv__div',
        {
          'toggleSwitchDiv__leftDiv--active': selectedSide === 'left'
        }]">
      <span>
        {{ leftText }}
      </span>
    </div>
    <div @click="emitRightClick"
         :class="[
        'toggleSwitchDiv__rightDiv',
        'toggleSwitchDiv__div',
        {
          'toggleSwitchDiv__rightDiv--active': selectedSide === 'right'
        }]">
     {{ rightText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleSwitch",
  props: {
    leftText: {
      type: String,
      required: true
    },
    rightText: {
      type: String,
      required: true
    },
    selectedSide: {
      type: String,
      required: true
    }
  },
  methods: {
    emitLeftClick() {
      if (this.selectedSide !== 'left') {
        this.$emit('clickLeft')
      }
    },
    emitRightClick() {
      if (this.selectedSide !== 'right') {
        this.$emit('clickRight')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.toggleSwitchDiv {
  background-color: #D8D8F6;
  border-radius: 8px;
  display: flex;
  box-sizing: border-box;
  height: 40px;
  width: 200px;
}

.toggleSwitchDiv__div {
  width: 50%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}

.toggleSwitchDiv__leftDiv {
  border-radius: 8px 0 0 8px;
  color: #93a5c0;

  &:hover {
    cursor: pointer;
  }
}

.toggleSwitchDiv__leftDiv--active {
  color: white;
  background-color: #74b14d;
  transition: .5s;

  &:hover {
    cursor: default;
  }
}

.toggleSwitchDiv__rightDiv {
  border-radius: 0 8px 8px 0;
  color: #93a5c0;

  &:hover {
    cursor: pointer;
  }
}

.toggleSwitchDiv__rightDiv--active {
  color: white;
  background-color: #DB5461;
  transition: .5s;

  &:hover {
    cursor: default;
  }}
</style>
