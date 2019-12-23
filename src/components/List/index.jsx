import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="list">
        {todos.map(({ msg }, i) => (<Todo key={i} msg={msg} />))}
      </div>
    );
  }
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.exact({
    msg: PropTypes.string,
  })),
};

List.defaultProps = {
  todos: [
    {
      msg: 'Lavar a roupa',
    },
    {
      msg: 'Levar o lixo',
    },
  ],
};

export default List;
