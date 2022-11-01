import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaginaFilme from "../views/PaginaFilme.vue";
import PaginaPesquisa from "../views/PaginaPesquisa.vue";
import PaginaLancamento from "../views/PaginaLancamento.vue";
import LoginView from "../views/LoginView.vue";
import PaginaCategorias from "../views/PaginaCategorias.vue";
import { useAuthStore } from "@/stores/auth";


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
    {
      path: "/login",
      nome: "login",
      component: LoginView,
    },
  
  ],
  
});


router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const sessionId = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (sessionId && !auth.userToken) {
    auth.returnUrl = to.fullPath;
    return '/'
    
  }
});

export default router;
