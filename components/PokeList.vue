<template>
  <ul class="list-container">
    <li
      v-for="(pokeData, index) of pokeList"
      :key="index"
      class="list-item"
      :class="{ 'drop-shadow': !pokeData.favorite }"
    >
      <span
        class="cursor-pointer"
        @click="showDetails(pokeData.url, pokeData.favorite, pokeData)"
        >{{ pokeData.name }}</span
      >
      <img
        v-if="pokeData.favorite"
        src="@/assets/icons/fav-active.svg"
        :alt="pokeData.name"
        class="icon-fav"
        @click="togglePokemon(pokeData.name)"
      />
      <img
        v-else
        src="@/assets/icons/fav-disabled.svg"
        :alt="pokeData.name"
        class="icon-fav"
        @click="togglePokemon(pokeData.name)"
      />
    </li>
    <transition name="fade">
      <PokeModal v-if="showModal" :pokemon="pokemon" :favorite="favorite" />
    </transition>
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
    async showDetails(url, favorite, pokeData) {
      this.$nuxt.$emit('showLoading')
      try {
        const { data } = await this.$axios.get(url)
        const { height, weight, name, types, sprites } = data
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
        this.$nuxt.$emit('hiddeLoading')
      } catch (error) {
        const { height, weight, name, types, sprites } = pokeData
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
        this.$nuxt.$emit('hiddeLoading')
      }
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
    text-transform: capitalize;
  }
  .drop-shadow {
    box-shadow: 0px 4px 4px 0px #00000040;
  }
}
.icon-fav {
  cursor: pointer;
}
</style>
