import { ref } from "vue";
import { defineStore } from "pinia";
import FavoritoApi from "@/api/favorito";
const favoritoapi = new FavoritoApi();

export const useFavStore = defineStore("favorito", () => {
  const favorito = ref([]);

  async function Fav(session_id) {
    favorito.value = await favoritoapi.Postfav(session_id);
  }
  return { Fav, favorito };
});
