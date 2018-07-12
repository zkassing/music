<template>
  <mu-flex class="music_control" direction="column" justify-content="between">
    <mu-linear-progress mode="determinate" :value="progress" :max="duration" color="secondary"></mu-linear-progress>
    <mu-flex class="music_info" align-items="center">
      <mu-avatar v-if="player.picUrl" class="avatar">
        <img :src="player.picUrl">
      </mu-avatar>
      <mu-button v-else fab small color="#e91e63">
        <mu-icon value="music_note"></mu-icon>
      </mu-button>
      <span class="name">{{player.name}}</span>
      <mu-flex :fill="true" align-items="center" justify-content="end">
        <mu-button flat small color="#e91e63" @click="changePlayStatus">
          <mu-icon :value="play_status"></mu-icon>
        </mu-button>
      </mu-flex>
      <audio ref="audio" @canplay="canplay" @timeupdate="timeupdate" autoplay :src="player.play_url"></audio>
    </mu-flex>
  </mu-flex>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      progress: 0,
      duration: 0,
      audio: null,
      play_status: 'play_arrow'
    }
  },
  computed: {
    ...mapState([
      'player'
    ])
  },
  methods: {
    canplay () {
      this.audio = this.$refs.audio
      this.play_status = "pause"
      this.duration = this.audio.duration
    },
    timeupdate () {
      this.progress = this.audio.currentTime
    },
    changePlayStatus () {
      // this.play_status = this.play_status === "play_arrow" ? 'pause' : 'play_arrow'
      if(this.player.play_url) {
        if(this.play_status === 'pause') {
          this.play_status = 'play_arrow'
          this.audio.pause()
        }else{
          this.play_status = 'pause'
          this.audio.play()
        }
      }
      

    }
  },
  created () {
    this.$nextTick(() => {
      this.audio = this.$refs.audio
    })
  }
}
</script>

<style scoped>
  .music_control {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    z-index: 2;
    background: #fff; 
    /* padding: 0 16px; */
  }
  .music_info {
    padding: 0px 16px 5px;
    width: 100%;
  }
  .name {
    margin-left: 16px;
  }
  .avatar {
    animation: rotate 20s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
