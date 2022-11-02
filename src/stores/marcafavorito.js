import { ref } from "vue";
import { defineStore } from "pinia";
import FavoritoApi from "@/api/favorito";
const favoritoapi = new FavoritoApi();

export const useFavStore = defineStore("favorito", () => {
  const favorito = ref([]);
  const usermovies = ref([])

  async function Fav(session_id) {
    favorito.value = await favoritoapi.Postfav(session_id);
    usermovies.value = await favoritoapi.GetMovies();
  }
  return { Fav, favorito, usermovies };
});
