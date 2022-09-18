import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaginaFilme from "../views/PaginaFilme.vue";
import PaginaPesquisa from "../views/PaginaPesquisa.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filme",
      nome: "filme",
      component: PaginaFilme,
    },
    {
      path: "/pesquisa",
      nome: "pesquisa",
      component: PaginaPesquisa,
    },

  ],
});

export default router;
