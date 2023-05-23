import React from "react";


export class Contador extends React.Component {

    constructor(props) {
      super(props)
      this.state = {contador: 0}
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      this.setState((prevState) => {
        return {contador: prevState.contador + 1}
      })
    }

    render() {
      return (
        <div>
          <h1>Contador: {this.state.contador}</h1>
          <button onClick={this.handleClick}>Adicionar</button>
        </div>
      )
    }

}