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
        <span
          ><select name="slect">
            <option>Açao</option>
            <option>Terror</option>
            <option>Animaçao</option>
            <option>Aventura</option>
            <option>Ficcao Cientifica</option>
            <option>Suspense</option>
            <option>Açao e Aventura</option>
            <option>Fantasia</option>
            <option>Comedia</option>
            <option>Drama</option>
            <option>Romance</option>
          </select></span
        >
        <span><RouterLink to="/lancamento">Lançamentos</RouterLink></span>
        <span>Diretores</span>
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
