<template>
  <div class="actionList">
    <HAction v-for="(action, index) of getCurrentActions" :key="index" :action="action"/>
  </div>
</template>

<script>
import HAction from "../../action/HAction";
export default {
  name: "actionList",
  components: {HAction},
  props: {
    actionSide: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      positiveActions: [
        {
          text: 'BUT'
        },
        {
          text: 'FAUTE'
        },
        {
          text: 'TIR'
        },
        {
          text: 'ARRET'
        },
        {
          text: 'CONTRE-ATTAQUE'
        },
      ],
      negativeActions: [
        {
          text: 'CARTON JAUNE'
        },
        {
          text: '2MIN'
        },
        {
          text: 'CARTON ROUGE'
        },
        {
          text: 'TIR RATE'
        },
        {
          text: 'PIED'
        },
      ]
    }
  },
  computed: {
    getCurrentActions() {
      if (this.actionSide === 'positive') {
        return this.positiveActions
      }
      return this.negativeActions
    }
  }
}
</script>

<style lang="scss" scoped>

.actionList {
  width: 100%;
  height: 100%;
  padding: 5px;
  display: inline-grid;
  grid-template-rows: repeat(4, 110px);
  grid-template-columns: repeat(5, 1fr);}

</style>
