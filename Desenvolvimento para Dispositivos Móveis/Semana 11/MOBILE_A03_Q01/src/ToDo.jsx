import React from "react";

export class ToDo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: '', tarefas: []}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
      this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
  
    if (this.state.value === '') {
      alert('Adicione uma tarefa')
    } else {
      const novaTarefa = this.state.value
      this.setState((prevState) => ({
        tarefas: [...prevState.tarefas, novaTarefa]
      }))
    }
    this.setState({value: ''})
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        O que vou fazer hoje? <input onChange={this.handleChange} value={this.state.value} />
        <input type="submit" value="Adicionar" />
      </form>
        <h2>Minhas tarefas</h2>
        <ul>
          {this.state.tarefas.map((tarefa, index) => {
            return <li key={index}>{tarefa}</li>
          })}
        </ul>
      </div>
    )
  }

}
