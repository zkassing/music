<template>
  <audio :src="music" controls autoplay></audio>
</template>

<script>
export default {
  data () {
    return {
      music: ''
    }
  },
  methods: {
    async getMusic () {
      const url = await this.axios.get('/music/url', {params: {id: this.$route.params.id}})
      console.log(url.data.data[0].url)
      this.music = url.data.data[0].url
    }
  },
  created () {
    this.getMusic()
  }
}
</script>

<style>

</style>
