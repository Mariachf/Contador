import React from "react";
import './App.css';

export default class Contador extends React.Component{
    state = {
        contador:0
    }

    mais(){
        if (this.state.contador < 10) {
            this.setState({
              contador: this.state.contador + 1
            })
          } else if (this.state.contador >= 10){}
    }

    menos = () => {
        if (this.state.contador > 0) {
          this.setState({
            contador: this.state.contador - 1
          })
        } 
      }
    
    
    render(){
       return (
        
        <div className="caixa">
            <div className="texto"><h1>{this.state.contador}</h1></div>

            <div className="botão">
                <button onClick={this.menos.bind(this)}>-</button>
                <button onClick={this.mais.bind(this)}>+</button>
            </div>
        </div>
        
        )
      }
}