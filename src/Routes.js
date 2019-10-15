/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { useAuthenticationContext } from './state/authentication'

import Home from './screens/Home'
import Historic from './screens/Historic'
import Changelog from './screens/Changelog'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useAuthenticationContext()
  return (
    <Route
      {...rest}
      render={(props) => (
        state.user
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )}
    />
  )
}

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <PrivateRoute path="/changelog" component={Changelog} />
    <PrivateRoute path="/historic" component={Historic} />
  </Switch>
)

export default Routes
