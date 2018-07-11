<template>
  <mu-tabs :value.sync="active" indicator-color="teal" inverse color="teal" full-width>
    <mu-tab to="/sheet">推荐歌单</mu-tab>
    <mu-tab>最新单曲</mu-tab>
    <mu-tab>新碟上架</mu-tab>
  </mu-tabs>
  
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
