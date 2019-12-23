import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './views/ToDoList';

function App() {
  return (
    <section className="app">
      <ToDoList />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
