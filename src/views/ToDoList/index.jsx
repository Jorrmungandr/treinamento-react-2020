import React, { Component } from 'react';
import List from '../../components/List';
import Input from '../../components/Input';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      todos: [],
    };
  }

  handleAdd(todo) {
    const { todos } = this.state;
    this.setState({
      todos: [
        todo,
        ...todos,
      ],
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Input add={this.handleAdd} />
        <List todos={todos} />
      </>
    );
  }
}

export default ToDoList;
