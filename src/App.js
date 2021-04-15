import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;