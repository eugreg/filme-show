import { ref } from "vue";
import { defineStore } from "pinia";
import LoginApi from "@/api/login"
import FavoritoApi from "@/api/favorito";
import router from "../router";
const favoritoapi = new FavoritoApi();
const loginapi = new LoginApi()

export const useAuthStore = defineStore("auth", () => {
  const globalToken = ref("");
  const userToken = ref("");
  const sessionId = ref("");
  const userData = ref({});
  const userMovies = ref([]);
  
  async function token() {
    globalToken.value = await loginapi.GetToken()
  }
  async function login(username, password) {
    userToken.value = await loginapi.Login(username, password, globalToken.value)
    sessionId.value = await loginapi.Session(userToken.value)
    userData.value = await loginapi.GetProfile(sessionId.value)
    router.push(this.goPagehome || '/filme');
    // userData.value = { ...user}
  }
  
  async function getfilme() {
    userMovies.value = await favoritoapi.GetMovies(sessionId.value)
    
    
  }




  return { login, token, globalToken, userToken, sessionId, userData, userMovies, getfilme };
});
