<template>
  <div>
    <PokeLoading v-if="showLoading" />
    <template v-else>
      <Nuxt />
      <PokeBottomBar></PokeBottomBar>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoading: false,
    }
  },
  mounted() {
    this.$nuxt.$on('showLoading', () => {
      console.log('showLoading')
    })

    this.$nuxt.$on('hiddeLoading', () => {
      console.log('hiddeLoading')
    })
  },
}
</script>
