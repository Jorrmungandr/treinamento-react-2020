import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Browser,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToDoList, Test } from './views';

function App() {
  return (
    // Precisamos do browser para o roteamento funcionar
    <Browser>
      <section className="app">
        {/* O switch pega a primeira rota que contenha na url acessada, e esquece as outras */}
        <Switch>
          {/*
            Cada rota é renderizada em um caminho da url,
            tente acessar
            http://localhost:3000
            e http://localhost:3000/teste
          */}
          <Route exact path="/" component={ToDoList} />
          <Route path="/teste" component={Test} />
          <Route>
            {/* Qualquer outra rota entra aqui, e então é redirecionada pra / */}
            <Redirect to="/" />
          </Route>
        </Switch>
      </section>
    </Browser>
  );
}

// Renderiza o App no public/index.html
ReactDOM.render(<App />, document.getElementById('root'));
