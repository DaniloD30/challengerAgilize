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

  loadData = () => { };

  render() {
    return (

      <div class="classificacao-temporada">
        <div class="classificacao">
          <span class="colocacao">3º</span> <p>Danilo, você tem <span class="pontuacao">10</span> pontos</p>
        </div>

        <div class="temporada-pontos">
          <h5>1ª Temporada</h5> <p>Pontos: <span>10</span></p>
        </div>
      </div>  
    )
  }
}

export default Card;