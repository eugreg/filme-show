<script>
import axios from "axios";
import PictureCard from "../components/PictureCard.vue";
export default {
  components: { PictureCard },
  props: ["id"],
  data() {
    return {
      pesquisas: [],
      valor_pesquisa: "",
    };
  },

  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    async search() {
      const url = ` https://api.themoviedb.org/3/search/movie?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR&query=${this.valor_pesquisa}&page=1&include_adult=false`;
      const { data } = await axios.get(url);
      this.pesquisas = data.results;
    },
  },
};
</script>

<template>
  <body>
    <div class="pesquisa">
      <form @submit.prevent="search" class="busca">
        <input type="text" v-model="valor_pesquisa" />
        <button type="submit">Buscar</button>
      </form>
    </div>
    <div class="resposta">
      <div class="conteudo">
        <PictureCard
          v-for="pesquisa of pesquisas"
          :key="pesquisa.id"
          :picture_src="getPosterUrl(pesquisa.poster_path)"
          :pic_link="pesquisa"
        />
      </div>
    </div>
  </body>
</template>
