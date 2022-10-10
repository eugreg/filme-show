<script>
import GeneroApi from "../api/generos.js";
const generoapi = new GeneroApi();
export default {
  props: ["id"],
  data() {
    return {
      genero: {},
    };
  },
  async mounted() {
    console.log('oioioioioio')
    this.genero = await generoapi.BuscaGeneroPorId(this.id);
  },
  watch: {
    async id() {
      console.log('aaaaaaa')
      this.genero = await generoapi.BuscaGeneroPorId(this.id);

      
    }
  }
};
</script>

<template>
  <div class="main">
    <div>
      <p>{{ genero.name }} - {{ id }}</p>
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
