// O React precisa estar importado no arquivo para que o código funcione
import React from 'react';
// O PropTypes serve pra declarar os tipos das props
import PropTypes from 'prop-types';
import './Todo.scss';

// Já que não usamos state aqui, pode ser uma função
function Todo({ msg, handleDelete, id }) {
  // Esse é um método, só que pra componentes funcionais
  const handleDeleteToDo = () => {
    // Deleta o todo por id
    handleDelete(id);
  };

  return (
    // A id do todo é puramente visual, não tem necessidade de aparecer no hmtl
    <div className="todo" id={id}>
      {/* O texto do to-do */}
      <p className="message">{msg}</p>
      {/* Quando esse botão é clicado, deleta o to-do */}
      <button className="delete" type="button" onClick={handleDeleteToDo}>X</button>
    </div>
  );
}

Todo.propTypes = {
  msg: PropTypes.string,
  handleDelete: PropTypes.func,
  id: PropTypes.number,
};

Todo.defaultProps = {
  msg: 'Lavar a casa',
  handleDelete: () => { },
  id: new Date().getTime(),
};

export default Todo;
