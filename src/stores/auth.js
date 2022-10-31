import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const userData = ref({});
  async function login(user) {
    userData.value = {...user}
  }

  return { count, doubleCount, increment };
});
