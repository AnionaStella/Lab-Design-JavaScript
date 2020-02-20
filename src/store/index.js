import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    nameText: ""
    // results: []
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions
    },
    setnameText(state, nameText) {
      state.nameText = nameText
    }
  },
  actions: {},
  modules: {}
})