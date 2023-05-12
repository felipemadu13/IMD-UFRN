
function Contato(props) {
  return (
    <div>
      <p><strong>Nome:</strong> {props.nome} {props.sobrenome}</p>
      <p><strong>Contato:</strong> {props.contato}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <hr />
    </div>
  );
}


export function App() {
  return (
    <>
    <Contato nome="Felipe" sobrenome="Madureira" contato="(84) 11111-1111" email="felipe@email.com" />
    <Contato nome="Rogério" sobrenome="Coeho" contato="(84) 22222-2222" email="rogerio@email.com" />
    <Contato nome="Marcela" sobrenome="Godoy" contato="(84) 33333-2222" email="godoy@email.com" />
    <Contato nome="Bianca" sobrenome="Pinheiro" contato="(84) 34444-2222" email="pinhobianca@email.com" />
    <Contato nome="Magno" sobrenome="Costa" contato="(84) 33445-2222" email="costamagno@email.com" />
    </>
  );
}

export default App
