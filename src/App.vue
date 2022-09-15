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

        <div>
          <p>Ação <hr /></p>
        <div class="conteudo">
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
        </div>
        </div>

        <div>
          <p>Drama <hr /></p>
        <div class="conteudo">
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
          <BlocoFilme />
        </div>
        </div>

        
      </div>
    </main>
    <footer>
      <P> FilmesShow</P>
    </footer>
  </body>
</template>
