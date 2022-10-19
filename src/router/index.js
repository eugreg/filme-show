import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaginaFilme from "../views/PaginaFilme.vue";
import PaginaPesquisa from "../views/PaginaPesquisa.vue";
import PaginaLancamento from "../views/PaginaLancamento.vue";

import PaginaCategorias from "../views/PaginaCategorias.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filmes/:id",
      nome: "filmes",
      component: PaginaFilme,
      props: true,
    },
    {
      path: "/filmes_por_genero/:id",
      nome: "filmesPorGenero",
      component: PaginaCategorias,
      props: true,
    },
    {
      path: "/pesquisa",
      nome: "pesquisa",
      component: PaginaPesquisa,
      props: true,
    },
    {
      path: "/lancamento",
      nome: "lancameno",
      component: PaginaLancamento,
    },
  ],
});

export default router;
