<script>
import PictureCard from "../components/PictureCard.vue";
import { mapStores, mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";

export default {
  components: { PictureCard },
  data() {
    return {
      user: "",
      favorito: [],
    };
  },

  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["userMovies", "userWatch", "userToken"]),
  },
  async created() {
    await this.getfilme();
    await this.getWatch();
  },
  methods: {
    //    reset() {
    //   Object.assign(this, this.userToken);
    // },


    ...mapActions(useAuthStore, ["login", "token", "getfilme", "logout", "getWatch"]),


    async deslogar(session_id) {
      await this.logout(session_id);
      this.$router.push("/");
    },

    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<template>
  <button @click="deslogar(user.session_id)">logout</button>
  <div class="conteudo">
    <PictureCard v-for="favorito of userMovies" :key="favorito.id" :picture_src="getPosterUrl(favorito.poster_path)"
      :pic_link="favorito" />
  </div>

  <p>   watch list </p>
  <div class="conteudo">
    <PictureCard v-for="favorito of userWatch" :key="favorito.id" :picture_src="getPosterUrl(favorito.poster_path)"
      :pic_link="favorito" />
  </div>
</template>
