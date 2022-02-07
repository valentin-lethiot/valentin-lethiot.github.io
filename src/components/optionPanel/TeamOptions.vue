<template>
  <div :class="['team-options', {
    'team-options--local': isLocalTeam,
    'team-options--extern': isExternTeam
  }]">
    <h-button @click="isMyTeamModalOpen = true" text="Equipe"/>
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
import HButton from "../utils/HButton";

export default {
  name: "TeamOptions",
  components: {
    HButton,
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
  padding: 5px;
  box-sizing: border-box;
}

.team-options--local {
  display: flex;
}

.team-options--extern {
  display: flex;
  justify-content: flex-end;
}
</style>
