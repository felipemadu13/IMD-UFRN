function Soma({a, b}) {
  return(
    <p>A soma entre {a} e {b} é: <strong>{a + b}</strong></p>
  );
}

function Subtracao({a, b}) {
  return(
    <p>A subtração entre {a} e {b} é: <strong>{a - b}</strong></p>
  );
}

function Multiplicacao({a, b}) {
  return(
    <p>A multiplicação entre {a} e {b} é: <strong>{a * b}</strong></p>
  );
}

function Divisao({a, b}) {
  return(
    <p>A divisão entre {a} e {b} é: <strong>{a / b}</strong></p>
  );
}


export function App() {

  return (
    <div>
      <Soma a={6} b={3} />
      <Subtracao a={6} b={3} />
      <Multiplicacao a={6} b={3} />
      <Divisao a={6} b={3} />
    </div>

  );
}

export default App
