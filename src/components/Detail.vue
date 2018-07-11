<template>
  <div>
    <mu-list textline="two-line">
      <mu-list-item :to="{name: 'play', params: {id: music.id}}" avatar button v-for="(music, index) in musices" :key="music.id">
        <mu-list-item-action>
          {{index + 1}}
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>{{music.name}}</mu-list-item-title>
          <mu-list-item-sub-title>{{music.ar[0].name}}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      musices: []
    }
  },
  methods: {
    async getDetail () {
      const detail = await this.axios.get('/playlist/detail', {params: {id: this.$route.params.id}})
      // console.log(detail)
      // console.log(detail.data.playlist.tracks)
      this.musices = detail.data.playlist.tracks
    }
  },
  created () {
    this.getDetail()
  }
}
</script>

<style>

</style>
