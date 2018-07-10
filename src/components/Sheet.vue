<template>
  <mu-list textline="two-line">
    <mu-list-item avatar button :ripple="false" v-for="sheet in list" :key="sheet.id" :to="{name: 'detail', params: {id: sheet.id}}">
      <mu-list-item-action>
        <mu-avatar>
          <img :src="sheet.picUrl">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>{{sheet.name}}</mu-list-item-title>
        <mu-list-item-sub-title>{{Math.floor(sheet.playCount / 10000)}}万播放</mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
  </mu-list>
</template>

<script>
export default {
  data () {
    return {
      list: {}
    }
  },
  methods: {
    async getSheet () {
      const sheets = await this.axios.get('/personalized')
      // console.log(sheets)
      this.list = sheets.data.result
    }
  },
  computed: {
    playCount () {
      return 
    }
  },
  created () {
    this.getSheet()
  }
}
</script>

<style>

</style>
