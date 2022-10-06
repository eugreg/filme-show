<script setup></script>

<template>
  <body>
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar" />
      <button>Pesquisar</button>
    </div>
    <div class="reposta">
      <h1>Resultados:</h1>
      <div class="conteudoR">
        <BlocoFilme />
        <BlocoFilme />
        <BlocoFilme />
        <BlocoFilme />
        <BlocoFilme />
      </div>
      <div class="conteudoRF">
        <BlocoFilme />
        <BlocoFilme />
        <BlocoFilme />
        <BlocoFilme />
        <BlocoFilme />
      </div>
    </div>
  </body>
</template>
