import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

const App = () => {
  const [loggedUser, setLoggedUser] = useState({})
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;