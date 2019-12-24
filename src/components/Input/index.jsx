/*
* O React precisa estar importado no arquivo para que o código
* funcione, e o Component vai ser usado pra criar o componente
*/
import React, { Component } from 'react';
// O PropTypes serve pra declarar os tipos das props
import PropTypes from 'prop-types';

class Input extends Component {
  // O construtor é a primeira coisa que acontece ao renderizar o componente
  constructor(props) {
    // O super serve pra usarmos o escopo (this) direito
    // 🔴 Aqui não podemos usar o this
    super(props);
    // ✅ Aqui agnt já pode
    // Isso serve pra imbuir o this dentro dos métodos
    // Método sem this = Método com this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // Inicializando o estado do componente
    this.state = {
      value: '',
    };
  }

  handleSubmit(event) {
    /*
      O event é a ação que chamou essa função,
      nesse caso, a submissão do formulário
    */
    /*
      Isso vai impedir que a função principal do evento seja realizada,
      nesse caso, atualizar a página com os dados na url, e nós não queremos isso
    */
    event.preventDefault();
    const { add } = this.props;
    const { value } = this.state;
    /*
      O value é o conteúdo atual do input, se ele for vazio, nada acontece,
      usamos isso pra evitar criar to-dos vazios
    */
    if (value === '') return;
    // Essa é a função que adiciona o todo na lista
    add({
      // O texto que o todo contém
      msg: value,
      // A id dele é o exato momento em milisegundos desde 01/01/72 (epoch time)
      id: new Date().getTime(),
    });
    /*
      Já que podemos controlar o valor do input pelo state,
      assim que enviarmos o input, limpamos o campo
    */
    this.setState({
      value: '',
    });
  }

  handleChange(event) {
    /*
      Toda vez que houver uma mudança no input,
      mudamos o valor do state para o valor que foi inserido
    */
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="input-container">
        {/*
          Quando o Botão de submit for apertado,
          o form vai ser submitado, e vai chamar o método handleSubmit
         */}
        <form onSubmit={this.handleSubmit}>
          {/*
            O valor do input é o valor que está no state
            e toda vez que ele muda o valor do state é mudado,
            pesuise sobre React controlled forms
          */}
          <input type="text" value={value} onChange={this.handleChange} placeholder="Digite um to-do" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  add: PropTypes.func,
};

Input.defaultProps = {
  add: () => { },
};

export default Input;
