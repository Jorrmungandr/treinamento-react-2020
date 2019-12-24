import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Test extends Component {
  // O construtor é a primeira coisa que acontece ao renderizar o componente
  constructor(props) {
    // O super serve pra usarmos o escopo (this) direito
    // 🔴 Aqui não podemos usar o this
    super(props);
    // ✅ Aqui agnt já pode
    // Isso serve pra imbuir o this dentro do método
    // Método sem this = Método com this
    this.handleChange = this.handleChange.bind(this);
    // Inicializando o estado do componente
    this.state = {
      val: '',
    };
  }

  handleChange(event) {
    this.setState({
      // Cada vez que o input muda, atualizamos o valor do state
      val: event.target.value,
    });
  }

  render() {
    const { val } = this.state;
    // Se o valor do componente (o texto do input) for 'redirecionar', ele redireciona para /
    if (val === 'redirecionar') return <Redirect to={{ pathname: '/', state: { value: val } }} />;
    return (
      <div>
        {/*
          O valor do input é o valor que está no state
          e toda vez que ele muda o valor do state é mudado,
          pesuise sobre React controlled forms
        */}
        <input type="text" value={val} onChange={this.handleChange} />
        {/* Esse é um anchor uq eredirecionar pra barra */}
        <a href="/teste">Esse atualiza a página</a>
        {/* Esse é um Link, que renderiza um anchor(<a></a>) mas não atualiza a página */}
        <Link to="/teste">Esse não atualiza a página</Link>
      </div>
    );
  }
}
