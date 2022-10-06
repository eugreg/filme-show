<script>
export default {
  props: ["filme"],
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
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
    </div>
    <div class="info-movi">
      <div class="titulo">{{ filme.title }}</div>
      <div class="descricao">
        {{ filme.overview }}
      </div>
    </div>
  </div>
</template>
