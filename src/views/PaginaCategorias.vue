<script>
import PictureCard from "../components/PictureCard.vue";
import GeneroApi from "../api/generos.js";
const generoapi = new GeneroApi();
export default {
  components: { PictureCard },
  props: ["id"],
  data() {
    return {
      filme: {},
      comedias: [],
    };
  },
  async mounted() {
    this.filme = await generoapi.BuscaFilmesPorGeneroP(this.id);
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },

  watch: {
    async id() {
      this.filme = await generoapi.BuscaFilmesPorGeneroP(this.id);
    },
  },
};
</script>

<template>
  <div class="main">
    <div>
      <p>{{ filme }}</p>
    </div>
    <div class="conteudo">
      <PictureCard
        v-for="comedia of comedias"
        :key="comedia.id"
        :picture_src="getPosterUrl(comedia.poster_path)"
        :pic_link="comedia"
      />
    </div>
  </div>
  <CompRodape />
</template>
