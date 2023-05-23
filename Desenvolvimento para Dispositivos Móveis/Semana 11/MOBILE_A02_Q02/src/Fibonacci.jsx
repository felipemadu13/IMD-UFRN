import React from "react";


export class Fibonacci extends React.Component {

    constructor(props) {
      super(props)
      this.state = {fibonacci: [0, 1, 1, 2]}
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      const { fibonacci } = this.state
      const novoNumero = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]
      this.setState((prevState) => ({
        fibonacci: [...prevState.fibonacci, novoNumero]
      }))
    }

    render() {
      return (
        <div>
          <h1>Sequência de Fibonacci:</h1>
          <button onClick={this.handleClick}>Adicionar</button>
        <ul>
          {this.state.fibonacci.map((numero, index) => {
            return <li key={index}>{numero}</li>
          })}
        </ul>
        </div>
      )
    }

}