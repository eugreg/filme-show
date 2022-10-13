<script>
import GeneroApi from "../api/generos.js";
const generoapi = new GeneroApi();
export default {
  data() {
    return {
      generos: [],
      genero: "",
    };
  },
  async created() {
    this.generos = await generoapi.BuscaTodosOsGeneros();
  },

  methods: {
    go() {
      this.$router.push(`/filmes_por_genero/${this.genero}`);
    },
  },
};
</script>

<template>
  <header>
    <div class="cabecalho">
      <div>
        <span class="cabecalho-span">
          <RouterLink to="/">FilmeShow</RouterLink>
        </span>
        <span>
          <select v-model="genero" @change="go" class="select-cabecalho">
            <option value="" disabled>Categorias</option>
            <option
              v-for="genero of generos"
              :key="genero.id"
              :value="genero.id"
            >
              {{ genero.name }}
            </option>
          </select>
        </span>
        <span class="cabecalho-span"
          ><RouterLink to="/lancamento">Lançamentos</RouterLink></span
        >
      </div>
      <div>
        <span class="cabecalho-span">Minha Conta</span>
        <button>
          <RouterLink to="/pesquisa" class="button-pesquisar"
            >Pesquisar
          </RouterLink>
        </button>
      </div>
    </div>
  </header>
</template>
