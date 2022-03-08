<template>
  <div id="app" class="app">
    <Hheader class="index__header"/>
    <VideoAction class="index__videoAction"/>
    <OptionPanel class="index__optionPanel"/>
  </div>
</template>

<script>

import Hheader from "../components/layout/Hheader";
import VideoAction from "../components/videoActions/VideoAction";
import OptionPanel from "../components/optionPanel/OptionPanel";
import TeamUtils from "@/store/modules/TeamModule/TeamUtils";

export default {
  name: 'Index',
  components: {
    OptionPanel,
    VideoAction,
    Hheader
  },
  mounted() {
    const myTeam = [
      {
        name: 'Corrales',
        firstname: 'Rodrigo',
        number: '12',
        poste: 'GB'
      },
      {
        name: 'Omeyer',
        firstname: 'Thierry',
        number: '16',
        poste: 'GB'
      },
      {
        name: 'Sagosen',
        firstname: 'Sander',
        number: '10',
        poste: 'DC'
      },
      {
        name: 'Karabatic',
        firstname: 'Nikola',
        number: '44',
        poste: 'DC'
      },
      {
        name: 'Stepancic',
        firstname: 'Luka',
        number: '7',
        poste: 'ARD'
      },
      {
        name: 'Remili',
        firstname: 'Nedim',
        number: '18',
        poste: 'ARD'
      },
      {
        name: 'Morros',
        firstname: 'Viran',
        number: '23',
        poste: 'ARG'
      },
      {
        name: 'Hansen',
        firstname: 'Mikkel',
        number: '24',
        poste: 'ARG'
      },
      {
        name: 'EkdahlDuRietz',
        firstname: 'Kim',
        number: '60',
        poste: 'ARG'
      },
      {
        name: 'Gensheimer',
        firstname: 'Uwe',
        number: '3',
        poste: 'ALG'
      },
      {
        name: 'Keita',
        firstname: 'Adama',
        number: '9',
        poste: 'ALG'
      },
      {
        name: 'Koundkoud',
        firstname: 'Benoit',
        number: '11',
        poste: 'ALD'
      },
      {
        name: 'Abalo',
        firstname: 'Luc',
        number: '19',
        poste: 'ALD'
      },
      {
        name: 'Nahi',
        firstname: 'Dylan',
        number: '99',
        poste: 'ALG'
      },
      {
        name: 'Toft Hansen',
        firstname: 'Henrik',
        number: '15',
        poste: 'P'
      },
      {
        name: 'Karabatic',
        firstname: 'Luca',
        number: '22',
        poste: 'P'
      }
    ]
    myTeam.forEach(player => {
      TeamUtils.addPlayer('LOCAL', player)
    })

    const opponentTeam = [
      {
        name: 'Afgour',
        firstname: 'Benjamin',
        number: '33',
        poste: 'P'
      },
      {
        name: 'Bingo',
        firstname: 'Arnaud',
        number: '29',
        poste: 'ALG'
      },
      {
        name: 'Bonnefond',
        firstname: 'Batiste',
        number: '24',
        poste: 'ARG'
      },
      {
        name: 'Bos',
        firstname: 'Julien',
        number: '13',
        poste: 'ARD'
      },
      {
        name: 'Causse',
        firstname: 'Theophile',
        number: '6',
        poste: 'ALD'
      },
      {
        name: 'Faustin',
        firstname: 'Jean-Loup',
        number: '25',
        poste: 'DC'
      },
      {
        name: 'Gerard',
        firstname: 'Vincent',
        number: '1',
        poste: 'GB'
      },
      {
        name: 'Grebille',
        firstname: 'Mathieu',
        number: '10',
        poste: 'ALG'
      },
      {
        name: 'Guigou',
        firstname: 'Michael',
        number: '14',
        poste: 'ALG'
      },
      {
        name: 'Kavticnik',
        firstname: 'Vid',
        number: '23',
        poste: 'ARD'
      },
      {
        name: 'Mamdouh',
        firstname: 'Mohamed',
        number: '89',
        poste: 'P'
      },
      {
        name: 'Petterson',
        firstname: 'Fredric',
        number: '18',
        poste: 'P'
      },
      {
        name: 'Porte',
        firstname: 'Valentin',
        number: '28',
        poste: 'ARD'
      },
      {
        name: 'Portner',
        firstname: 'Nikola',
        number: '16',
        poste: 'GB'
      },
      {
        name: 'Richardson',
        firstname: 'Melvyn',
        number: '22',
        poste: 'ARD'
      },
      {
        name: 'SimoneT',
        firstname: 'Diego',
        number: '4',
        poste: 'DC'
      },
      {
        name: 'Soussi',
        firstname: 'Mohamed',
        number: '39',
        poste: 'DC'
      },
      {
        name: 'Truchanovicius',
        firstname: 'Jonas',
        number: '7',
        poste: 'ARG'
      },
      {
        name: 'Villeminot',
        firstname: 'Kyllian',
        number: '5',
        poste: 'DC'
      }
    ]

    opponentTeam.forEach(player => {
      TeamUtils.addPlayer('EXTERN', player)
    })

  }
  /*
  green: 74b14d
  blue: 3C6997
  darkPurple: 190933
  red: DB5461
  gray: D8D8F6
   */
}
</script>

<style lang="scss" scoped>
.app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}

.index__header {
  width: 100%;
  height: 15%;
}

.index__videoAction {
  width: 100%;
  height: 70%;
}

.index__optionPanel {
  width: 100%;
  height: 15%;
}
</style>
