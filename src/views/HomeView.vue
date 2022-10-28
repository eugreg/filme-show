<script>
import TitleComp from '@/components/template/TitleComp.vue'
import PictureCard from "../components/PictureCard.vue";
import FilmeApi from "../api/Filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: { PictureCard, TitleComp },
  data() {
    return {
      filmes: [],
    };
  },
  async created() {
    this.filmes = await filmeapi.BuscaTodosOsFilmes();
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<template>
  <div class="main">
    <TitleComp titulo="Adicionados Recentemente" />
    <div class="conteudo">
      <PictureCard
        v-for="filme of filmes"
        :key="filme.id"
        :picture_src="getPosterUrl(filme.poster_path)"
        :pic_link="filme"
      />
      
    </div>
  </div>
</template>

<style>
.conteudo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
