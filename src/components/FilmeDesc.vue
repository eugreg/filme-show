<script>

import { mapStores, mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
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

  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["userFav"]),
  },
  watch: {
    async filme() {
      console.log(this.filme.id);
      this.videos = await filmeapi.BuscarVideos(this.filme.id);
    },
  },
  methods: {
    ...mapActions(useAuthStore, ["salvarfilme", "salvarWatch"]),
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    getVideoUrl(key) {
      return `https://www.youtube.com/embed/${key}`;
    },
    async salvar(media_id) {
      await this.salvarfilme(media_id);
      this.$toast.success(`Filme salvo com sucesso`,{
        type: 'success',
        position: 'top-right'
      });
      setTimeout(this.$toast.clear, 3000)
    },
    async salvar2(media_id) {
      await this.salvarWatch(media_id);
      this.$toast.success(`Filme salvo com sucesso`,{
        type: 'success',
        position: 'top-right'
      });
      setTimeout(this.$toast.clear, 2000)
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
        <button @click="salvar(filme.id)">curtir</button>
        <button @click="salvar2(filme.id)">assistir mais tarde</button>
        <h2>lançamento: {{ filme.release_date }}</h2>
        <h3>Avaliação dos usuários:{{ Math.round(filme.vote_average) }}</h3>
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
