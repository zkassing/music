<template>
  <mu-container style="padding: 0">
    <mu-row>
      <mu-col span="12">
        <mu-appbar style="width: 100%;" color="#e91e63">
          <mu-button icon slot="left" @click="back" v-if="$route.path !== '/recomment'">
            <mu-icon value="arrow_back"></mu-icon>
          </mu-button>
            音乐
        </mu-appbar>
        
      </mu-col>
      <router-view></router-view>

      <mu-col span="12">
        <mu-flex v-if="loading" class="flex-wrapper" justify-content="center" style="transform: translateY(100px)">
          <mu-flex class="flex-demo" justify-content="center" >
            <mu-circular-progress color="secondary" :size="36"></mu-circular-progress>
          </mu-flex>
        </mu-flex>
      </mu-col>
      
    
    </mu-row>
  </mu-container>

</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'loading'
    ])
  },
  methods: {
    back () {
      const path = this.$route.path
      console.log(path)
      path !== '/recomment' ? this.$router.go(-1) : null
      
    }
  }
}
</script>

<style>

</style>
