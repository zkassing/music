<template>
  <mu-flex direction="column">
    <mu-appbar style="width: 100%;" color="#e91e63">
      <mu-button icon slot="left">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <mu-text-field @change="getMusicSuggest" v-model="keyword" full-width ></mu-text-field>
    </mu-appbar>
    <Search :songs="songs" v-if="songs.length"></Search>
  </mu-flex>
  
</template>

<script>
import Search from '../Search'
export default {
  data () {
    return {
      keyword: "",
      songs: []
    }
  },
  components: {
    Search
  },
  methods: {
    async getMusicSuggest (keywords) {
      let result = await this.axios.get('/search/suggest', {params: {
        type: 1,
        keywords
      }})

      result = result.data.result.songs
      this.songs = result
      console.log(result)

    }
  }
}
</script>

<style>

</style>
