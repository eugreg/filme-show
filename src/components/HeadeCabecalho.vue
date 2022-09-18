<script>
export default {};
</script>

<template>
  <header>
    <div class="cabecalho">
      <div>
        <span>
          <RouterLink to="/">FilmeShow</RouterLink>
        </span>
        <span>Categorias</span>
        <span>Diretores</span>
        <span>
          <RouterLink to="/ator">Atores</RouterLink>
        </span>
      </div>
      <div>
        <span>Minha Conta</span>
        <button>
          <RouterLink to="/pesquisa" class="button-pesquisar"
            >Pesquisar
          </RouterLink>
        </button>
      </div>
    </div>
  </header>
</template>
