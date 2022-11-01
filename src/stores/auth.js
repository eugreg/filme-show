import { ref } from "vue";
import { defineStore } from "pinia";
import LoginApi from "@/api/login"
import router from "../router";
const loginapi = new LoginApi()

export const useAuthStore = defineStore("auth", () => {
  const globalToken = ref("");
  const userToken = ref("");
  const sessionId = ref("");
  const userData = ref({});
  async function token() {
    globalToken.value = await loginapi.GetToken()
  }

  async function login(username, password) {
    userToken.value = await loginapi.Login(username, password, globalToken.value)
    sessionId.value = await loginapi.Session(userToken.value)
    userData.value = await loginapi.GetProfile(sessionId.value)
    router.push(this.goPagehome || '/');
    // userData.value = { ...user}
  }
  
  


  return { login,   token, globalToken, userToken,sessionId,userData};
});
