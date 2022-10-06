<script setup>
import HeadeCabecalho from "./components/HeadeCabecalho.vue";
import { RouterView } from "vue-router";
import CompRodape from "./components/CompRodape.vue";
</script>

<template>
  <body>
      <HeadeCabecalho />
      <RouterView />
      <CompRodape />
  </body>
</template>
