<template>
  <img
    :class="{
      'loading-img': !load,
    }"
    :src="src"
    :alt="alt"
    loading="lazy"
    @load="load = true"
  />
</template>

<script>
export default {
  props: {
    src: {
      default: '',
      type: String,
      required: true,
    },
    alt: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      load: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.loading-img {
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38'%3E%3Cdefs%3E%3ClinearGradient x1='8.042%25' y1='0%25' x2='65.682%25' y2='23.865%25' id='a'%3E%3Cstop stop-color='%231A5CFF' stop-opacity='0' offset='0%25'/%3E%3Cstop stop-color='%231A5CFF' stop-opacity='.631' offset='63.146%25'/%3E%3Cstop stop-color='%231A5CFF' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(1 1)'%3E%3Cpath d='M36 18c0-9.94-8.06-18-18-18' id='Oval-2' stroke='url(%23a)' stroke-width='2'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='0.25s' repeatCount='indefinite'/%3E%3C/path%3E%3Ccircle fill='%231A5CFF' cx='36' cy='18' r='1'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='0.25s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
