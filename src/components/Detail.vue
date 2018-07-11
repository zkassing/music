<template>
  <mu-list textline="two-line">
    <mu-list-item avatar button v-for="(m, index) in music" :key="index" @click="getPlayUrl(m.id, m)">
      <mu-list-item-action>
        <mu-avatar>
          <img :src="m.al.picUrl" alt="">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>{{m.name}}</mu-list-item-title>
        <mu-list-item-sub-title>{{m.ar[0].name}}</mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
  </mu-list>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'music'
    ])
  },
  methods: {
    getMusic (id) {
      this.$store.commit('setLoadStatus', true)
      this.$store.dispatch('getMusic', id)
    },
    getPlayUrl (id,music) {
      // console.log(m)
      this.$store.commit('setPlayer', {name: music.name, picUrl: music.al.picUrl})
      this.$store.dispatch('getPlayUrl', id)
    }
  },
  created () {
    this.getMusic(this.$route.params.id)
  }

}
</script>

<style>

</style>
