<template>
  <div class="main-container">
    <div class="welcome-container">
      <img
        src="@/assets/images/pikachu.svg"
        alt="Pikachu"
        class="hello-pikachu"
      />
      <h1 class="title">Welcome to Pokédex</h1>
      <p class="sub-title">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <nuxt-link to="/" class="d-inline-block">
        <button class="pocke-button">Get started</button>
      </nuxt-link>
    </div>
  </div>
</template>

.
<style lang="scss" scoped>
.main-container {
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome-container {
  max-width: 570px;
  display: grid;
  place-content: center;
  gap: 1rem;
  .hello-pikachu {
    display: inline-block;
    margin: auto;
  }
}
.title {
  font-weight: bold;
  text-align: center;
  font-size: 26px;
  color: #353535;
}
.sub-title {
  font-size: 18px;
  text-align: center;
  color: #5e5e5e;
}
.pocke-button {
  display: block;
  margin: auto;
  border: none;
  background-color: #f22539;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  border-radius: 60px;
  font-weight: bold;
  padding: 11px 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
}
</style>
