import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameEnd from '../views/GameEnd';
import GamePlay from '../views/GamePlay';

const GameLayout = () => {
  return (
    <Switch>
      <Route exact path='/game/end'>
        <GameEnd />
      </Route>
      <Route path='/'>
        <GamePlay />
      </Route>
    </Switch>
  );
};

export default GameLayout;
