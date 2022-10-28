<script>
import FilmeApi from "../api/Filmes.js";
const filmeapi = new FilmeApi();
export default {
  data() {
    return {
      videos: false,
    };
  },
  props: ["filme"],
  // async created() {
  //   console.log(this.filme.id);
  //   this.videos = await filmeapi.BuscarVideos(this.filme.id);
  // },
  watch: {
    async filme() {
      console.log(this.filme.id);
      this.videos = await filmeapi.BuscarVideos(this.filme.id);
    },
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    getVideoUrl(key) {
      return `https://www.youtube.com/embed/${key}`;
    },
  },
};
</script>
<template>
  <div class="descMovi">
    <div>
      <img
        :src="getPosterUrl(filme.poster_path)"
        alt="linda imagem do avatar"
      />
      <iframe
        v-if="videos"
        width="560"
        height="315"
        :src="getVideoUrl(videos[0].key)"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="info-movi">
      <div class="titulo">{{ filme.title }}</div>
      <div class="descricao">
        {{ filme.overview }}
      </div>
      <div class="descricao">
        <h2>lançamento: {{ filme.release_date }}</h2>
        <h3>Avaliação dos usuários:{{  Math.round(filme.vote_average) }}</h3>
      </div>
    </div>
  </div>
</template>

<style>
.videos {
  /* background-color: red; */
  z-index: 1;
}
</style>
