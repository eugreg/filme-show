<script setup>
import HeadeCabecalho from "./components/HeadeCabecalho.vue";
import BlocoFilme from "./components/BlocoFilme.vue";
</script>

<template>
  <body>
    <main>
      <HeadeCabecalho />
      <div>
        <div class="conteudo">
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
        </div>
        <div class="conteudo">
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
        </div>
        <div class="conteudo">
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
        </div>
        <div class="conteudo">
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
        </div>
      </div>
    </main>
    <footer>
      <P> FilmesShow</P>
    </footer>
  </body>
</template>
