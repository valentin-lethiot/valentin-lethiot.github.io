<template>
  <div class="teamManager__component">
    <HInput class="teamManager__teamNameInput" label="Nom de l'équipe" v-model="teamName"/>
    <button class="teamManager__saveButton" @click.prevent="save"> Sauvegarder </button>
  </div>
</template>

<script>
import HInput from "@/components/utils/HInput";
import TeamUtils from "@/store/modules/TeamModule/TeamUtils";

export default {
  name: "TeamManager",
  components: {
    HInput
  },
  props: {
    side: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      teamName: this.getTeamName()
    }
  },
  methods: {
    getTeamName() {
      return TeamUtils.getTeamName(this.side)
    },
    save() {
      TeamUtils.updateTeamName(this.side, this.teamName)
    }
  }
}
</script>

<style lang="scss" scoped>
.teamManager__component {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.teamManager__teamNameInput {
  width: 50%;
}

.teamManager__saveButton {
  width: 150px;
  align-self: flex-end;
}
</style>
