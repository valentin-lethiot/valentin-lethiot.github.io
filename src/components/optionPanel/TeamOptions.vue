<template>
  <div :class="['team-options', {
    'team-options--local': isLocalTeam,
    'team-options--extern': isExternTeam
  }]">
    <button @click="isMyTeamModalOpen = true">Mon équipe</button>
    <team-modal
        v-if="isMyTeamModalOpen"
        @submit="emitSubmit"
        @close="isMyTeamModalOpen = false"
        :side="side"
    />
  </div>
</template>

<script>
import TeamModal from "../TeamModal/TeamModal";

export default {
  name: "TeamOptions",
  components: {
    TeamModal,
  },
  props: {
    side: {
      type: String,
      required: true
    }
  },
  data (){
    return {
      isMyTeamModalOpen: false
    }
  },
  computed: {
    isLocalTeam() {
      return this.side === 'LOCAL'
    },
    isExternTeam() {
      return this.side === 'EXTERN'
    }
  },
  methods: {
    emitSubmit(player) {
      console.log(JSON.stringify(player, undefined, 2))
    }
  }
}
</script>

<style scoped>
.team-options {
  height: 100%;
  width: 25%;
}

.team-options--local {
  background-color: lightblue;
  display: flex;
}

.team-options--extern {
  background-color: lightgreen;
  display: flex;
  justify-content: flex-end;
}
</style>
