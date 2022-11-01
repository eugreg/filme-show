<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  data() {
    return {
      user: "",
      passoword: "",
    };
  },
setup(){
  const store = useAuthStore()
  return store
},
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["user"]),
    ...mapState(useAuthStore, ["passoword"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["passowordData"]),
    ...mapActions(useAuthStore, ["userData"]),
    submit() {console.log('HERE')},
  },
};
</script>
<template>
  <form  @submit.prevent="submit">   

    <div  class="centralizando">
      <div class="forms-login">
        <div class="infos">
          <label for="">Usuario</label>
          <input v-model="userData" type="text" />
        </div>
        <div class="infos">
          <label for="">Senha</label>
          <input v-model="passowordData" type="text" />
        </div>
        <div><button >entrar</button></div>
      </div>
    </div>
  </form>
  </template>
  