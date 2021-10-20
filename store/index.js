export const state = () => ({
  pokemons: [],
})
export const getters = {
  getPokemons: (state) => {
    return state.pokemons
  },
}
export const mutations = {
  togglePokemon: (state, payload) => {
    for (const pokemon of state.pokemons) {
      if (pokemon.name === payload) {
        pokemon.favorite = !pokemon.favorite
      }
    }
  },
  updatePokemons: (state, payload) => {
    state.pokemons = payload
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('loadPokemons')
  },
  async loadPokemons({ commit }) {
    const {
      data: { results },
    } = await this.$axios.get('https://pokeapi.co/api/v2/pokemon')
    for (const item of results) {
      item.favorite = false
    }
    commit('updatePokemons', results)
  },
}
