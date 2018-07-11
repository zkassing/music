import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  player: {
    play_url: '',
    name: '开启音乐好生活',
    picUrl: ''
  },
  loading: false,
  music_sheet: [],
  music: []
}

const getters = {

}

const mutations = {
  setRecommentMusicSheet (state, music_sheet) {
    state.music_sheet = music_sheet
  },
  setLoadStatus (state, status) {
    state.loading = status
  },
  setMusic (state, music) {
    state.music = music
  },
  setPlayUrl (state, url) {
    state.player.play_url = url
  },
  setPlayer (state, music) {
    // state.player.name = music.name
    // state.player.picUrl = music.picUrl
    state.player = Object.assign(state.player, music)
  }
}

const actions = {
  async getRecommentMusicSheet ({commit}) {
    commit('setRecommentMusicSheet', [])    
    let result = await Vue.axios.get('/top/playlist/highquality')
    result = result.data
    if(result.code === 200) {
      const recommentMusicSheet = result.playlists
      commit('setRecommentMusicSheet', recommentMusicSheet)
      commit('setLoadStatus', false)
    }
  },
  async getMusic ({commit}, id) {
    commit('setMusic', [])
    let result = await Vue.axios.get('/playlist/detail', {params: {id}})
    result = result.data
    if(result.code === 200) {
      const music = result.playlist.tracks
      commit('setMusic', music)
      commit('setLoadStatus', false)      
    }
  },
  async getPlayUrl ({commit}, id) {
    let result = await Vue.axios.get('/music/url', {params: {id}})
    result = result.data
    if(result.code === 200){
      const url = result.data[0].url
      // console.log(url)
      commit('setPlayUrl', url)
    }
  }
}


export default new Vuex.Store({
  state, getters, mutations, actions
})