import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

function Todo({ msg }) {
  return (
    <div className="todo">
      <p>{msg}</p>
    </div>
  );
}

Todo.propTypes = {
  msg: PropTypes.string,
};

Todo.defaultProps = {
  msg: 'Lavar a casa',
};

export default Todo;
