<template>
  <div class="videoPlayerContainer">
    <vue-plyr ref="plyr">
      <video
          controls
          crossorigin
          playsinline
          data-poster="poster.jpg"
      >
        <source
            size="720"
            src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            type="video/mp4"
        />
      </video>
    </vue-plyr>
  </div>
</template>

<script>
import MatchUtils from "@/store/modules/MatchModule/MatchUtils";

export default {
  name: "VideoPlayer",
  mounted () {
    this.$refs.plyr.player.on('timeupdate', () => MatchUtils.updateCurrentVideoTimestamp(this.$refs.plyr.player.currentTime))
  },
  data() {
    return {
      playerOptions: {
        muted: true,
        language: 'fr',
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: "@/assets/logo.png",
      }
    }
  },
  methods: {
    updateVideoTime(event, a) {
      console.log(JSON.stringify(event, undefined, 2))
      console.log(JSON.stringify(a, undefined, 2))
    }
  }
}
</script>

<style lang="scss">
.videoPlayerContainer {
  width: 100%;
  height: 100%;
}

.videoPlayerContainer__player {
  width: 100%;
  height: 100%;
}

.video-js {
  width: 100%;
  height: 100%;
}
</style>
