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
      <ul v-if="!error" class="list-container">
        <li
          v-for="({ name }, index) of pokeList"
          :key="index"
          class="list-item"
        >
          {{ name }} <img src="@/assets/icons/fav-disabled.svg" alt="" />
        </li>
      </ul>
      <div v-else class="empty-list">
        <h1 class="title">Uh-oh!</h1>
        <p class="sub-title">You look lost on your journey!</p>
        <PokeButton text="Go back home" to="/" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      pokeList: [],
      queryList: [],
      error: false,
      loading: true,
    }
  },
  async created() {
    await this.getPokemons()
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
    async getPokemons() {
      try {
        const {
          data: { results },
        } = await this.$axios('/pokemon')
        this.pokeList = results
        this.loading = false
      } catch (error) {
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
.list-container {
  max-width: 570px;
  width: 100%;
  grid-template-columns: 1fr;
  display: grid;
  place-content: center;
  gap: 1rem;
  position: relative;
  padding: 0;
  list-style: none;
  .list-item {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 8px 12px;
    display: flex;
    font-size: 22px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
}
.empty-list {
  max-width: 570px;
  display: grid;
  place-content: center;
  gap: 1rem;
}
</style>
