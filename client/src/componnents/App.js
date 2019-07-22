import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import AuthentificatedComponent from './AuthentificatedComponent';
import Login from './Login';
import KolesoCard from './KolesoCard';

function App() {
  return (
<BrowserRouter>
    <Switch>
      <Route path = "/Auth" component = {AuthentificatedComponent}/>
      <Route path = '/koleso' exac component = {KolesoCard} />
      <Route path = "/login" component = {Login}/>
      <Route path = '/' exac component = {Home} />
      
    </Switch>
</BrowserRouter>
  );
}

export default App;
