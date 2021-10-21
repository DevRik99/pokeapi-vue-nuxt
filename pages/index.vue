<template>
  <div class="main-container">
    <div class="welcome-container">
      <LoadingImg
        :src="require(`@/assets/images/pikachu.png`)"
        alt="Pikachu"
        class="hello-pikachu"
      />
      <h1 class="title">Welcome to Pokédex</h1>
      <p class="sub-title">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <PokeButton text="Get started" to="/list" />
    </div>
  </div>
</template>
