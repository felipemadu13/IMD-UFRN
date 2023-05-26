import { useState, useEffect } from "react";
import "./global.css"

export function ToDo() {
  const [id, setId] = useState(0);
  const [value, setValue] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [count, setCount] = useState(0);

  
  function handleChange(event) {
    setId(Math.random().toString());
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    if (value === '') {
      alert('Adicione uma tarefa');
    } else {
      const novaTarefa = { id, value };
      setTarefas((prevState) => [...prevState, novaTarefa]);
      setCount(count + 1);
    }
    setValue('');
    event.preventDefault();
  }
  
  function handleCheckbox(id) {
    setTarefas((prevState) => prevState.filter((tarefa) => tarefa.id !== id));
    setCount(count - 1);
  }
  
  useEffect(() => {
    document.title = `Quantidade de tarefas: ${count}`;
  }, [count]);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        O que precisa ser feito? 
        <div>
        <input onChange={handleChange} value={value} />
        <input type="submit" value="Adicionar" />

        </div>
      </form>
      <h2>Tarefas</h2>
      <h3>Quantidade de Tarefas: {count}</h3>
      <ul>
        {tarefas.map((tarefa) => {
          return (
            <li key={tarefa.id}>
              {tarefa.value}
              <input
                type="checkbox"
                id={tarefa.id}
                onChange={() => handleCheckbox(tarefa.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
