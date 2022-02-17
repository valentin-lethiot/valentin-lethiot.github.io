<template>
  <div>
    <div v-if="isLocalTeam" class="team-options">
      <div>
        <h-button @click="isMyTeamModalOpen = true" text="Equipe"/>
      </div>
      <div>
        <img
            src="@/assets/icons/ball.svg"
            :class="[
                'team-options--ballIcon',
                'team-options--ballIcon--local',
                {
                  'team-options--ballIcon--rotate--local': isLocalTeamAttacking,
                  'team-options--ballIcon--disable': isExternTeamAttacking,
                }
            ]"
        />
      </div>
    </div>
    <div v-else class="team-options">
      <div>
        <img
            src="@/assets/icons/ball.svg"
            :class="[
                'team-options--ballIcon',
                'team-options--ballIcon--extern',
                {
                  'team-options--ballIcon--rotate--extern': isExternTeamAttacking,
                  'team-options--ballIcon--disable': isLocalTeamAttacking,
                }
              ]"
        />
      </div>
      <div>
        <h-button @click="isMyTeamModalOpen = true" text="Equipe"/>
      </div>
    </div>
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
import MatchUtils from "../../store/modules/MatchModule/MatchUtils";

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
      return MatchUtils.isLocalValue(this.side)
    },
    isExternTeam() {
      return MatchUtils.isExternValue(this.side)
    },
    isLocalTeamAttacking() {
      return MatchUtils.isAttackingSideLocal()
    },
    isExternTeamAttacking() {
      return MatchUtils.isAttackingSideExtern()
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
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.team-options--ballIcon {
  width: 35px;
  height: 35px;
}

.team-options--ballIcon--rotate--local {
  animation: rotationLocal 2.5s infinite linear;
}

.team-options--ballIcon--rotate--extern {
  animation: rotationExtern 2.5s infinite linear;
}

.team-options--ballIcon--local {
  filter: invert(62%) sepia(57%) saturate(376%) hue-rotate(53deg) brightness(89%) contrast(96%);
}

.team-options--ballIcon--extern {
  filter: invert(39%) sepia(60%) saturate(1257%) hue-rotate(318deg) brightness(95%) contrast(79%);
}

.team-options--ballIcon--disable {
  filter: invert(75%) sepia(7%) saturate(541%) hue-rotate(201deg) brightness(108%) contrast(110%);
}

@keyframes rotationLocal {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes rotationExtern {
  from {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
