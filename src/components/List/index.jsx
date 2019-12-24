// O React precisa estar importado no arquivo para que o código funcione
import React from 'react';
// O PropTypes serve pra declarar os tipos das props
import PropTypes from 'prop-types';
// O todo é o que vai ser renderizado para cada to-do
import Todo from '../Todo';

// Já que não usamos state aqui, pode ser uma função
function List({ todos, handleDelete }) {
  return (
    <div className="list">
      {/* todos é um array de to-dos */}
      {todos.map(({ msg, id }, i) => (
        <Todo
          // Isso serve pra o react renderizar mais rápido
          key={i}
          // O texto do to-do
          msg={msg}
          // A id (o tempo em que ele foi criado)
          id={id}
          // A função pra deletar
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

List.propTypes = {
  handleDelete: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.exact({
    msg: PropTypes.string,
    id: PropTypes.number,
  })),
};

List.defaultProps = {
  handleDelete: () => { },
  todos: [
    {
      msg: 'Lavar a roupa',
      id: 1577122409330,
    },
    {
      msg: 'Levar o lixo',
      id: 1577122409331,
    },
  ],
};

export default List;
