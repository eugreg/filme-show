import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaginaFilme from "../views/PaginaFilme.vue";
import PaginaPesquisa from "../views/PaginaPesquisa.vue";
import PaginaLancamento from "../views/PaginaLancamento.vue";
import PaginaAcaoaventura from "../views/PaginaAcaoaventura.vue";
import PaginaAnimacao from "../views/PaginaAnimacao.vue";
import PaginaComedia from "../views/PaginaComedia.vue";
import PaginaDrama from "../views/PaginaDrama.vue";
import PaginaFantasia from "../views/PaginaFantasia.vue";
import PaginaFiccaocientifica from "../views/PaginaFiccaocientifica.vue";
import PaginaRomance from "../views/PaginaRomance.vue";
import PaginaSuspense from "../views/PaginaSuspense.vue";
import PaginaTerror from "../views/PaginaTerror.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filme/:id",
      nome: "filme",
      component: PaginaFilme,
      props: 
    },
    {
      path: "/pesquisa",
      nome: "pesquisa",
      component: PaginaPesquisa,
    },
    {
      path: "/lancamento",
      nome: "lancameno",
      component: PaginaLancamento,
    },
    {
      path: "/acao",
      nome: "açao   ",
      component: PaginaAcaoaventura,
    },
    {
      path: "/animacao",
      nome: "animaçao",
      component: PaginaAnimacao,
    },
    {
      path: "/comedia",
      nome: "comedia",
      component: PaginaComedia,
    },
    {
      path: "/Drama",
      nome: "drama",
      component: PaginaDrama,
    },
    {
      path: "/fantasia",
      nome: "fantasia",
      component: PaginaFantasia,
    },
    {
      path: "/ficcao",
      nome: "ficcao ",
      component: PaginaFiccaocientifica,
    },
    {
      path: "/romance",
      nome: "romance",
      component: PaginaRomance,
    },
    {
      path: "/suspense",
      nome: "suspense",
      component: PaginaSuspense,
    },
    {
      path: "/terror",
      nome: "terror",
      component: PaginaTerror,
    },
 
    
  ],
});

export default router;
