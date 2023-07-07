<script>
    let nome = "";

</script>

<p>Um INPUT para se digitar um "nome" associado com uma variável chamada "nome":</p>
<input type="text" bind:value={nome} placeholder="Digite seu nome" />
<p>Quando se digita um valor uma mensagem abaixo aparece assim: "Olá Nome Digitado".</p>

{#if nome}
  <h1>Olá {nome}</h1>
{/if}