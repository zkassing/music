<template>
  <mu-col span="12">
    <mu-tabs inverse color="secondary" text-color="rgba(0, 0, 0, .54)" full-width>
      <mu-tab>推荐歌单</mu-tab>
      <mu-tab>TAB ITEM 2</mu-tab>
      <mu-tab>TAB ITEM 3</mu-tab>
    </mu-tabs>
    <mu-list textline="two-line">
      <mu-list-item avatar button v-for="(music, index) in music_sheet" :key="index" :to="{name: 'recomment', params:{id: music.id}}">
        <mu-list-item-action>
          <mu-avatar>
            <img :src="music.coverImgUrl" alt="">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>{{music.name}}</mu-list-item-title>
          <mu-list-item-sub-title>{{Math.floor(music.playCount / 10000)}}万次播放</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-col>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'music_sheet'
    ])
  },
  methods: {
    getRecommentMusicSheet () {
      this.$store.dispatch('getRecommentMusicSheet')
      this.$store.commit('setLoadStatus', true)
    }
  },
  created () {
    this.getRecommentMusicSheet()
  }
}
</script>

<style>

</style>
