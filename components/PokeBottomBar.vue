<template>
  <div v-if="route != 'index'" class="poke-tabs">
    <div class="tab-container">
      <button
        class="button-tab"
        :class="{ active: route == 'list' }"
        @click="goto('/list')"
      >
        <img src="@/assets/icons/list.svg" alt="List" /> List
      </button>

      <button
        class="button-tab"
        :class="{ active: route == 'favorites' }"
        @click="goto('/favorites')"
      >
        <img src="@/assets/icons/fav-tab.png" alt="Favorites" /> Favorites
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    route() {
      return this.$route.name
    },
  },
  methods: {
    goto(url) {
      this.$router.push(url)
    },
  },
}
</script>

<style lang="scss">
.poke-tabs {
  position: fixed;
  width: 100%;
  max-width: 100vw;
  height: 60px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
.tab-container {
  max-width: 570px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button-tab {
  display: block;
  border: none;
  background-color: #bfbfbf;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  border-radius: 60px;
  font-weight: bold;
  padding: 8px 16px;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 45%;
  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 720px) {
    margin: auto;
  }
}
.active {
  background-color: #f22539;
  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:active {
    background: #c00e20;
  }
}
</style>
