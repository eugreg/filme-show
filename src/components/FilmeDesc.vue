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
      return `https://www.youtube.com/watch?v=${key}`;
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
      <video v-if="videos" width="320" height="240" controls>
        <source :src="getVideoUrl(videos[0].key)" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="info-movi">
      <div class="titulo">{{ filme.title }}</div>
      <div class="descricao">
        {{ filme.overview }}
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
