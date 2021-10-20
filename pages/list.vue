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

      <PokeList v-if="!error" :poke-list="pokeList" />
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
    }
  },
  computed: {
    pokeList() {
      return this.$store.getters.getPokemons
    },
  },
  methods: {
    async searchPokemon() {
      try {
        this.loading = true
        const query = this.query.toLowerCase().trim()
        const { data } = await this.$axios(`/pokemon/${query}`)
        this.queryList = data
        this.loading = false
      } catch (error) {
        this.loading = false
        this.error = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form-list {
  max-width: 570px;
  width: 100%;
  grid-template-columns: 1fr;
  display: grid;
  place-content: center;
  gap: 1rem;
  position: relative;
}
.search-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: #ffffff;
  input,
  button {
    border: none;
    background: #ffffff;
    padding: 8px 12px;
  }
  input {
    flex-grow: 1;
  }
}
</style>
