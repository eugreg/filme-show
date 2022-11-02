<script>
 import { mapStores, mapState, mapActions } from "pinia";
import { useFavStore } from "@/stores/marcafavorito";
export default {
  data() {
    return {
      favoritos: [],
    };
  },

  computed: {
    ...mapStores(useFavStore),
    ...mapState(useFavStore, ["usermovies"]),
  },
};
</script>

<template>

    <div class="conteudo">
      <PictureCard
        v-for="favoritos of usermovies "
        :key="favoritos.id"
        :picture_src="getPosterUrl(favoritos.poster_path)"
        :pic_link="favoritos"
      />
      
    </div>
</template>
