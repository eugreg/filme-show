<script>
import PictureCard from "../components/PictureCard.vue";
import GeneroApi from "../api/generos.js";
const generoapi = new GeneroApi();
export default {
  components: { PictureCard },
  props: ["id"],
  data() {
    return {
      genero: {},
      generos: [],
    };
  },
  async created(){
    this.generos = await generoapi.BuscaFilmesPorGeneroP();
  },
  async mounted() {
    this.genero = await generoapi.BuscaFilmesPorGeneroP(this.id);
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },

  watch: {
    async id() {
      this.genero = await generoapi.BuscaFilmesPorGeneroP(this.id);
    },
  },
};
</script>

<template>
  <div class="main">
    <div>
      <p>  filme </p>
    </div>
    <div class="conteudo">
      <PictureCard
        v-for="genero of generos"
        :key="genero.id"
        :picture_src="getPosterUrl(genero.poster_path)"
        :pic_link="genero"
      />
    </div>
  </div>
  <CompRodape />
</template>
