<template>
  <div class="main-container">
    <form class="form-list" @submit.prevent="searchPokemon">
      <div class="search-container">
        <button type="submit">
          <img src="@/assets/icons/search-icon.png" alt="Search Icon" />
        </button>
        <input
          type="search"
          placeholder="Search"
          class="list-input"
          v-model.trim="search"
          required
        />
      </div>
      <ul class="list-container">
        <li class="list-item">
          Pokémon #2 <img src="@/assets/icons/fav-active.svg" alt="" />
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    async searchPokemon() {},
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
  justify-content: start;
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
  }
}
</style>
