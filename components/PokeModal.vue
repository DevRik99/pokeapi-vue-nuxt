<template>
  <div class="modal-container">
    <div class="modal-details">
      <div class="close-button">
        <img
          src="@/assets/icons/close-button.png"
          alt="Close Button"
          @click="closeModal"
        />
      </div>
      <div class="img-container">
        <LoadingImg :src="pokemon.urlImagen" :alt="pokemon.name" />
      </div>
      <ul class="list-details">
        <li>
          <span class="title">Name:</span>
          <span class="sub-title">{{ pokemon.name }}</span>
          <hr />
        </li>
        <li>
          <span class="title">weight:</span>
          <span class="sub-title">{{ pokemon.weight }}</span>
          <hr />
        </li>
        <li>
          <span class="title">height:</span>
          <span class="sub-title">{{ pokemon.height }}</span>
          <hr />
        </li>
        <li>
          <span class="title">Types:</span>
          <span class="sub-title">{{ pokemon.types }}</span>
          <hr />
        </li>
      </ul>
      <div class="footer-modal">
        <div>
          <button
            type="button"
            class="poke-button active"
            @click="copyToClipboard"
          >
            Share to my Friends
          </button>
        </div>
        <img
          v-if="favorite"
          src="@/assets/icons/fav-active.svg"
          :alt="pokemon.name"
          class="icon-fav"
        />
        <img
          v-else
          src="@/assets/icons/fav-disabled.svg"
          :alt="pokemon.name"
          class="icon-fav"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$nuxt.$emit('closeModal', false)
    },
    async copyToClipboard() {
      try {
        const pokemonDescription = []
        const pokemon = this.pokemon
        delete pokemon.urlImagen
        for (const key of Object.keys(pokemon)) {
          pokemonDescription.push(`${key}: ${pokemon[key]}`)
        }
        await navigator.clipboard.writeText(pokemonDescription.toString())
        alert('El pokemon ahora esta en tu portapapeles')
      } catch (error) {
        alert(
          'No se pudo copiar al portapapeles, al parecer no tienes la api de clipboard en tu navegador'
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-container {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-details {
    width: 570px;
    height: 506px;
    background: #ffffff;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    @media (max-width: 720px) {
      max-width: 90vw;
    }
  }
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  .img-container {
    width: 100%;
    height: 194px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/images/poke-background.png');
    background-position: 0 0;
    background-repeat: repeat;
    animation: animateBackground 60s alternate infinite;
    img {
      width: 180px;
      height: 180px;
    }
  }

  .list-details {
    display: block;
    width: 95%;
    margin: auto;
    list-style: none;
    padding: 1rem;
    padding-bottom: 0;
    text-transform: capitalize;
    .title {
      font-size: 18px;
    }
  }
  .footer-modal {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@keyframes animateBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 0;
  }
}
</style>
