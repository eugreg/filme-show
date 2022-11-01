<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
export default {
  data() {
    return {
      genero: "",
    };
  },
  async created() {
    this.generos = await this.getAllGenres();
  },
  computed: {
    ...mapStores(useGenreStore),
    ...mapState(useGenreStore, ["genres"]),
  },
  methods: {
    ...mapActions(useGenreStore, ["getAllGenres"]),
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
              v-for="genero of genres"
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
        <RouterLink to="/login"><span class="cabecalho-span">Minha Conta</span></RouterLink>
        <button>
          <RouterLink to="/pesquisa" class="button-pesquisar"
            >Pesquisar
          </RouterLink>
        </button>
        <RouterLink to="/minha-conta" class="button-pesquisar"
            >Pesquisar
          </RouterLink>
      </div>
    </div>
  </header>
</template>
