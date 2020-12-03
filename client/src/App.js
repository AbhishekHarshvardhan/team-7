import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import GameLayout from './layouts/GameLayout';
import Home from './views/Home';

function App() {
  return (
    <Switch>
      <Route path='/game'>
        <GameLayout />
      </Route>
      <Route path='/' exact>
        <Home />
      </Route>
      <Redirect from='*' to='/' />
    </Switch>
  );
}

export default App;
