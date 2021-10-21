<template>
  <div class="main-container">
    <form class="form-list" @submit.prevent="searchPokemon">
      <div class="search-container">
        <button type="submit">
          <img src="@/assets/icons/search-icon.png" alt="Search Icon" />
        </button>
        <input
          v-model.trim="query"
          type="search"
          placeholder="Search"
          class="list-input"
          required
        />
      </div>
      <template v-if="!error">
        <PokeList
          v-if="!queryList.length != 0 || !query"
          :poke-list="favList"
        />
        <PokeList v-else :poke-list="queryList" />
      </template>
      <PokeEmpty v-if="error || favList.length == 0"> </PokeEmpty>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      query: '',
      queryList: [],
      error: false,
      loading: true,
    }
  },
  computed: {
    favList() {
      return this.$store.getters.getPokemons.filter(
        (pokemon) => pokemon.favorite
      )
    },
  },
  methods: {
    ...mapMutations({ addPokemon: 'addPokemon' }),
    async searchPokemon() {
      try {
        this.$nuxt.$emit('showLoading')
        this.loading = true
        const query = this.query.toLowerCase().trim()
        const { data } = await this.$axios(`/pokemon/${query}`)
        this.addPokemon(data)
        this.queryList = this.$store.getters.getPokemons.filter(
          (pokemon) => pokemon.name === data.name
        )
        this.error = false
        this.$nuxt.$emit('hiddeLoading')
      } catch (error) {
        this.error = true
        this.$nuxt.$emit('hiddeLoading')
      }
    },
  },
}
</script>
