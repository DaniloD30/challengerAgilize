import React, { Component } from 'react'
import './styles.css'

class Card extends Component {

  state = {
    colocacao: '',
    name: '',
    pontuacao: ''
  }
  
  componentDidMount = () => {
  }
  
  loadData = () => {};
  
  render() {
    return (
      <div class="classificacao">
        <span class="colocacao">3º</span> <p>Danilo, você tem <span class="pontuacao">10</span> pontos</p>
      </div>
    )
  }
}

export default Card;