<template>
  <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" @click.native="back">
      <mu-icon value="arrow_back"></mu-icon>
    </mu-button>
    罐子音乐

    <!-- <mu-button flat slot="right">LOGIN</mu-button> -->
  </mu-appbar>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
