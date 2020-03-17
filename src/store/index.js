import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let sign = null
let showSign = false
let search = null
let sindex = 0

const state = {
    sign,
    showSign,
    search,
    sindex
}

export default new Vuex.Store({
    state,
    mutations: {
        muSign(state, data) {
            state.sign = data
        },
        handleSign(state, data) {
            state.showSign = data
        },
        handleSearch(state, data) {
            state.search = data
        },
        handleIndex(state, data) {
            state.sindex = data
        }
    }
})