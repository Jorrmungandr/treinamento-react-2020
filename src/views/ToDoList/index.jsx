// O React precisa estar importado no arquivo para que o código funcione
import React, { Component } from 'react';
// O withRouter serve pra estender as funções do react-router pra esse componente
import { withRouter } from 'react-router-dom';
// Importa os dois componentes
import { List, Input } from '../../components';

class ToDoList extends Component {
  // O construtor é a primeira coisa que acontece ao renderizar o componente
  constructor(props) {
    // O super serve pra usarmos o escopo (this) direito
    // 🔴 Aqui não podemos usar o this
    super(props);
    // ✅ Aqui agnt já pode
    // Isso serve pra imbuir o this dentro dos métodos
    // Método sem this = Método com this
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // Inicializando o estado do componente
    this.state = {
      todos: [],
    };
  }

  handleAdd(todo) {
    // A lista de to-dos atual
    const { todos } = this.state;
    this.setState({
      // Muda o state para a lista atual, só que com o todo passado como parâmetro no começo dela
      todos: [todo, ...todos],
    });
  }

  handleDelete(deleteId) {
    // A lista de to-dos atual
    const { todos } = this.state;
    this.setState({
      /*
        Filtra a lista de todos atual e remove o todo
        cuja a id é igual à id que foi passada como parâmetro
      */
      todos: todos.filter(({ id }) => (deleteId !== id)),
    });
  }

  render() {
    console.log(this.props.location);
    // A lista de todos
    const { todos } = this.state;
    return (
      <>
        {/* Renderiza o Input e a lista, passando os métodos como props */}
        <Input add={this.handleAdd} />
        <List handleDelete={this.handleDelete} todos={todos} />
      </>
    );
  }
}

export default withRouter(ToDoList);
