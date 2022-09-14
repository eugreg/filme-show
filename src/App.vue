<script setup>
import HeadeCabecalho from "./components/HeadeCabecalho.vue";
import BlocoFilme from "./components/BlocoFilme.vue";
</script>

<template>
  <body>
    <main>
      <nav>
        <HeadeCabecalho />
      </nav>

      <div>
        <p>Animação <hr /></p>
        <div class="conteudo">
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
        </div>
      </div>
    </main>
  </body>
</template>
