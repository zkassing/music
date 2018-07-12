<template>
  <mu-flex style="width: 100%" direction="column" full-width>
    <mu-tabs inverse color="secondary" text-color="rgba(0, 0, 0, .54)">
      <mu-tab>单曲</mu-tab>
      <mu-tab>歌手</mu-tab>
      <mu-tab>专辑</mu-tab>
      <mu-tab>歌单</mu-tab>
    </mu-tabs>
    <mu-list textline="two-line">
      <mu-list-item avatar button v-for="(song, index) in songs" :key="index" @click="getPlayUrl(song.id)">
        <mu-list-item-content>
          <mu-list-item-title>{{song.name}}</mu-list-item-title>
          <mu-list-item-sub-title>{{song.artists[0].name}}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-flex>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['songs'],
  methods: {
    getPlayUrl (id) {
      this.$store.dispatch('getPlayUrl', id)
      this.$store.dispatch('getSongDetail', id)
    }
  }
}
</script>

<style>

</style>
