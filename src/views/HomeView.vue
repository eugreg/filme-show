<script>
import BlocoFilme from "../components/BlocoFilme.vue";
import CompRodape from "../components/CompRodape.vue";
import FilmeApi from "../api/Filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: { BlocoFilme, CompRodape },
  data() {
    return {
      filme: {},
      filmes: [],
    };
  },
  async created() {
    this.filme = await filmeapi.BuscaTodosOsFilmes;
  },
};
</script>

<template>
  <div class="main">
    <div>
      <p>Adicionados Recentemente</p>
    </div>
    <div class="conteudo" >
      <BlocoFilme picture_src="https://image.tmdb.org/t/p/w500//tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
    </div>
    <div class="conteudo">
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
    </div>
    <div class="conteudo">
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
      <BlocoFilme picture_src="src/assets/img/avatar.jpg" pic_link="/filme" />
    </div>
  </div>
  <CompRodape />
</template>
