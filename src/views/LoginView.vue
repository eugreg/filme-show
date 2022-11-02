<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  data() {
    return {
      username: "",
      password: "",
      
    };
  },
async created(){
  await this.token()

},
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["userData"]),
    ...mapState(useAuthStore, ["userToken"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["token", "login"]),
     async submit() {
    await this.login(this.username, this.password)
     },
  },
};
</script>
<template>
  {{userData.name}}
  <form  @submit.prevent="submit">   

    <div  class="centralizando">
      <div class="forms-login">
        <div class="infos">
          <label for="">Usuario</label>
          <input v-model="username" type="text" />
        </div>
        <div class="infos">
          <label for="">Senha</label>
          <input v-model="password" type="text" />
        </div>
        <div><button type="submit" >entrar</button></div>
      </div>
      <div  v-if="userToken.false">: <p>

        {{userToken.status_message}}
      </p>
        
      </div>
    </div>
  </form>
  </template>
  