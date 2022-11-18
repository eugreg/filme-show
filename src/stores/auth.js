import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import LoginApi from "@/api/login";
import FavoritoApi from "@/api/favorito";
import { ref } from "vue";
// import router from "../router";
const favoritoapi = new FavoritoApi();
const loginapi = new LoginApi();

export const useAuthStore = defineStore("auth", () => {
  const globalToken = useStorage("globalToken", "");
  const userToken = useStorage("userToken", "");
  const sessionId = useStorage("sessionId", "");
  const userData = useStorage("userData", {});
  const userMovies = useStorage("userMovies", []);
  const userLogout = ref("");
  const userFav = ref([]);

  async function token() {
    globalToken.value = await loginapi.GetToken();
  }
  async function login(username, password) {
    userToken.value = await loginapi.Login(
      username,
      password,
      globalToken.value
    );
    sessionId.value = await loginapi.Session(userToken.value);
    userData.value = await loginapi.GetProfile(sessionId.value);
    // router.push(this.goPagehome || "/filme");
    // userData.value = { ...user}
  }
  // async function logout(session_id){
  //   userLogout.value = await favoritoapi.DeleteLogin(sessionId.value, session_id)
  // }
  async function logout() {
    localStorage.DeleteLogin(session_id.value);
  }

  async function getfilme() {
    userMovies.value = await favoritoapi.GetMovies(sessionId.value);
  }
  async function salvarfilme(movie_id) {
    userFav.value = await favoritoapi.Postfav(sessionId.value, movie_id);
  }

  return {
    login,
    token,
    getfilme,
    salvarfilme,
    logout,
    userLogout,
    globalToken,
    userToken,
    sessionId,
    userData,
    userMovies,
    userFav,
  };
});
