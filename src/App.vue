<script setup>
import HeadeCabecalho from "./components/HeadeCabecalho.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <body>
      <HeadeCabecalho />
      <RouterView />
  </body>
</template>
