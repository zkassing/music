<template>
  <div>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    async getDetail () {
      const detail = await this.axios.get('/playlist/detail', {params: {id: this.$route.params.id}})
      console.log(detail)
    }
  },
  created () {
    this.getDetail()
  }
}
</script>

<style>

</style>
