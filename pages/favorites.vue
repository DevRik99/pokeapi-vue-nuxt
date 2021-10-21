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
        <PokeList v-if="!favList.length != 0 || !query" :poke-list="favList" />
        <PokeList v-else-if="queryList" :poke-list="queryList" have-data />
      </template>
      <PokeEmpty v-else> </PokeEmpty>
    </form>
  </div>
</template>

<script>
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
    async searchPokemon() {
      try {
        this.$nuxt.$emit('showLoading')
        this.loading = true
        const query = this.query.toLowerCase().trim()
        const { data } = await this.$axios(`/pokemon/${query}`)
        this.queryList = [data]
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
