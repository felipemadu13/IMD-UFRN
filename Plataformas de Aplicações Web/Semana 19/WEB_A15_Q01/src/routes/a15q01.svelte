<script>
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;
    let contF = 0;
    let contK = 0;
  
    function converterF() {
      fahrenheit = (celsius * 9 / 5) + 32;
      contF = 1;
    }

    function converterK() {
      kelvin = celsius + 273.15;
      contK = 1;
    }
    
  </script>
  

    <h1>Calculadora de Temperatura</h1>

    <h3>Digite a Temperatura em Celsius</h3>
    <input type="number" bind:value={celsius} />
    <button on:click={converterF}>Converter F</button>
    <button on:click={converterK}>Converter K</button>


    {#if fahrenheit && contF > 0}
      <p>{celsius}ºC equivalem a {fahrenheit}ºF</p>
      {contF = 0}
    {/if}

    {#if kelvin && contK > 0}
    <p>{celsius}ºC equivalem a {kelvin}K</p>
      {contK = 0}
    {/if}

  

  