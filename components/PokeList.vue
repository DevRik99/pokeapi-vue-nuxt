<template>
  <ul class="list-container">
    <li
      v-for="({ name, favorite }, index) of pokeList"
      :key="index"
      class="list-item"
    >
      {{ name }}
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
    },
  },
  methods: {
    ...mapMutations({ togglePokemon: 'togglePokemon' }),
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
