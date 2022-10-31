import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const userData = ref({});
  async function login(user) {
    userData.value = { ...user }
  }
  const passowordData = ref({});
  async function senha(passoword) {
    passowordData.value = { ...passoword }
  }

  return { login, senha, passowordData, userData };
});
