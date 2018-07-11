<template>
  <div id="app">
    <router-view/>
    <MusicPlayer></MusicPlayer>

  </div>
</template>

<script>
import MusicPlayer from './components/MusicPlayer'
export default {
  name: 'App',
  components: {
    MusicPlayer
  }
  
}
</script>

<style>
  body {
    margin-bottom: 44px;
  }
</style>
