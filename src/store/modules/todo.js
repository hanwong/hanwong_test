import axios from 'axios'

const state = {
  todos: []
}

const mutations = {
  'SET_TODOS' (state, todos) {
    state.todos = todos
  },
}

const actions = {
  async setTodos ({commit}) {
    return await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        commit('SET_TODOS', res.data)
        return true
      })
      .catch((error) => {
        return false
      })
  },
}

const getters = {
  getTodos: state => {
    return state.todos
  }
}

export default {
  state, 
  mutations,
  actions,
  getters
}
