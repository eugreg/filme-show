<script setup>
import BlocoFilme from "../components/BlocoFilme.vue";
import CompRodape from "../components/CompRodape.vue";
</script>

<template>
  <div class="main">
    <div>
      <p>Terror</p>
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
