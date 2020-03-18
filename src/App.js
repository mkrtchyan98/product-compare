import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';


function App() {
  return ( <div className="app">
    <Switch>
    <Route   path="/" component={Home}/>
    <Route path="/notfound" component={NotFound}/>
    </Switch>
    </div>   
  );
}

export default App;
