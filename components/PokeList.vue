<template>
  <ul class="list-container">
    <li
      v-for="({ name, url, favorite }, index) of pokeList"
      :key="index"
      class="list-item"
    >
      <span class="cursor-pointer" @click="showDetails(url, favorite)">{{
        name
      }}</span>
      <img
        v-if="favorite"
        src="@/assets/icons/fav-active.svg"
        :alt="name"
        class="icon-fav"
        @click="togglePokemon(name)"
      />
      <img
        v-else
        src="@/assets/icons/fav-disabled.svg"
        :alt="name"
        class="icon-fav"
        @click="togglePokemon(name)"
      />
    </li>
    <PokeModal v-if="showModal" :pokemon="pokemon" :favorite="favorite" />
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    pokeList: {
      type: Array,
      default: () => [],
      required: true,
      favorite: false,
    },
  },
  data() {
    return {
      pokemon: '',
      showModal: false,
    }
  },
  mounted() {
    this.$nuxt.$on('closeModal', () => {
      this.showModal = false
    })
  },
  methods: {
    ...mapMutations({ togglePokemon: 'togglePokemon' }),
    async showDetails(url, favorite) {
      const { data } = await this.$axios.get(url)
      const { height, weight, name, sprites, types } = data
      const pokemonData = {
        height,
        weight,
        name,
        urlImagen: sprites.other['official-artwork'].front_default,
        types: this.getTypes(types),
      }
      this.pokemon = pokemonData
      this.favorite = favorite
      this.showModal = true
    },
    getTypes(typesArray) {
      const types = []
      for (const type of typesArray) {
        types.push(type.type.name)
      }
      return types.toString()
    },
  },
}
</script>

<style lang="scss" scoped>
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
  padding-bottom: 60px;
  .list-item {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 8px 12px;
    display: flex;
    font-size: 22px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px 0px #00000040;
    text-transform: capitalize;
  }
}
.icon-fav {
  cursor: pointer;
}
</style>
