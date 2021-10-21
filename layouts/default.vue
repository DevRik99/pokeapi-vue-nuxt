<template>
  <div>
    <PokeLoading v-if="showLoading" />
    <Nuxt />
    <PokeBottomBar></PokeBottomBar>
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
      this.showLoading = true
    })

    this.$nuxt.$on('hiddeLoading', () => {
      setTimeout(() => (this.showLoading = false), 250)
    })
  },
}
</script>
