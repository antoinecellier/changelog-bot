import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './screens/Home'
import Historic from './screens/Historic'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/historic">
      <Historic />
    </Route>
  </Switch>
)

export default Routes
