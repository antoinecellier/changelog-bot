import React, { useEffect } from 'react'
import isUndefined from 'lodash/isUndefined'

import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Routes from './Routes'

import { useAuthenticationContext } from './state/authentication'

import './App.css'

const App = () => {
  const { state, actions } = useAuthenticationContext()

  useEffect(() => {
    if (isUndefined(state.user)) actions.checkLogin()
  })

  return (
    <Layout
      header={(
        <Navbar
          onLogin={actions.login}
          onLogout={actions.logout}
          user={state.user}
        />
      )}
      content={<Routes />}
    />
  )
}

export default App
