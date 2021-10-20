<template>
  <nuxt-link :to="to" class="d-inline-block">
    <button class="poke-button">{{ text }}</button>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      default: 'Your Text',
      type: String,
      required: true,
    },
    to: {
      default: '/',
      type: String,
      required: true,
    },
  },
}
</script>
