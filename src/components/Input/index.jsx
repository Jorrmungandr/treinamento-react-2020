import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      value: '',
    };
  }

  handleClick() {
    const { add } = this.props;
    const { value } = this.state;
    add({
      msg: value,
    });
    this.setState({
      value: '',
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="input-container">
        <input type="text" value={value} onChange={this.handleChange} placeholder="Digite um to-do" />
        <button type="button" onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}

export default Input;
