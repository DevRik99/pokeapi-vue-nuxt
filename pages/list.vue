<template>
  <div class="main-container">
    <form class="form-list" @submit.prevent="searchPokemon">
      <input
        type="search"
        placeholder="Search"
        class="list-input"
        v-model.trim="search"
      />

      <ul class="list-container">
        <li class="list-item">1</li>
        <li class="list-item">2</li>
        <li class="list-item">3</li>
        <li class="list-item">4</li>
        <li class="list-item">5</li>
        <li class="list-item">6</li>
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

<style lang="scss" scoped></style>
