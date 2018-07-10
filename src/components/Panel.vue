<template>
  <div class="list">
    <Tabs></Tabs>
    <!-- <mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Tabs from './Tabs'
export default {
  components: {
    Tabs
  }
}
</script>

<style>

</style>
