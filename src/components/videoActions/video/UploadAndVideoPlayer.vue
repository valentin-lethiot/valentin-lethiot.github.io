<template>
  <div>
    <div v-if="!video">
      <input type="file" accept="video/*" @change="videoUploaded( $event )"/>
    </div>
    <div v-else class="videoPlayer__div">
      <video-player class="videoPlayer__player" :video-source="video"/>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer";
export default {
  name: "UploadAndVideoPlayer",
  components: {VideoPlayer},
  data() {
    return {
      video: null
    }
  },
  methods: {
    videoUploaded(event){
      this.video = URL.createObjectURL(event.target.files[0]);
    }
  }
}
</script>

<style lang="scss" scoped>
.videoPlayer__div {
  width: 100%;
}

.videoPlayer__player {
  width: 100%;
}
</style>
