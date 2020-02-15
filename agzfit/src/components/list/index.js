import React, { Component } from 'react'
import './styles.css'

class List extends Component {

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
      <div class="atividades-dia">
        <div class="ponto-dia">
            <h5>Dia 1</h5> <h6>10</h6>
        </div>

        <ul>
            <li class="disponivel"><i></i> Desjejum <a class="liberada" href="javascript:;">disponível</a> <span class="pontos">10</span></li>
            <li class="cumprido"><i></i> Almoço <span class="pontos">10</span></li>
            <li class="bloqueado"><i></i> Jantar <span class="pontos">10</span></li>
            <li class="falhou"><i></i> Treino <span class="pontos">10</span></li>
        </ul>
    </div>
    )
  }
}

export default List;