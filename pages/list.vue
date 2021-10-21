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
          :poke-list="pokeList"
        />
        <PokeList v-else :poke-list="queryList" have-data />
      </template>
      <PokeEmpty v-if="error"> </PokeEmpty>
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
    }
  },
  computed: {
    pokeList() {
      return this.$store.getters.getPokemons
    },
  },
  watch: {
    query() {
      if (!this.query) {
        this.error = false
      }
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
