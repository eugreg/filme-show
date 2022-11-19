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
  const userWatch = ref([]);
  const userFav = ref([]);
  const userWa = ref([])

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
  async function logout(session_id) {
    favoritoapi.DeleteLogin(sessionId.value, session_id);
  }
  // async function logout() {
  // sessionId.value = null,
  //   localStorage.DeleteLogin()
  // }
 

  async function getfilme() {
    userMovies.value = await favoritoapi.GetMovies(sessionId.value);
  }
  async function getWatch() {
    userWatch.value = await favoritoapi.GetWatch(sessionId.value);
  }
  async function salvarfilme(media_id) {
    userFav.value = await favoritoapi.Postfav(sessionId.value, media_id);
  }
  async function salvarWatch(media_id) {
    userWa.value = await favoritoapi.PostWatch(sessionId.value, media_id);
  }
  //  async function reset() {
  //   Object.assign(this, userToken);
  // }


  return {
    login,
    token,
    getfilme,
    salvarfilme,
    getWatch,
    salvarWatch,
   

    logout,

    userWa,
    userWatch,
    globalToken,
    userToken,
    sessionId,
    userData,
    userMovies,
    userFav,
  };
});
