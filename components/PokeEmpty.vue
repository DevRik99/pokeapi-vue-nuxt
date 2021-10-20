<template>
  <div class="empty-list">
    <h1 class="title">Uh-oh!</h1>
    <p class="sub-title">You look lost on your journey!</p>
    <PokeButton text="Go back home" to="/" />
  </div>
</template>

<style lang="scss" scoped>
.empty-list {
  max-width: 570px;
  display: grid;
  place-content: center;
  gap: 1rem;
}
</style>
