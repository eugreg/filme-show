<script>
import PictureCard from "../components/PictureCard.vue";
import { mapStores, mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  components: { PictureCard },
  data() {
    return {
      favorito: [],
    };
  },

  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["userMovies", "userLogout"]),
  },
  async created() {
    await this.getfilme();
  },
  methods: {
    ...mapActions(useAuthStore, ["login", "token", "getfilme", "logout"]),

    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<template>
<button @click="logout(session_id)">logout</button>
  <div class="conteudo">
    <PictureCard
      v-for="favorito of userMovies"
      :key="favorito.id"
      :picture_src="getPosterUrl(favorito.poster_path)"
      :pic_link="favorito"
    />
  </div>
</template>
