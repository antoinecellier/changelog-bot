import React, { useContext, useEffect } from 'react'
import isUndefined from 'lodash/isUndefined'

import { Store } from './state/authentication'

import Layout from './components/Layout'
import Navbar from './components/Navbar'

import './App.css'


const App = () => {
  const { state, actions } = useContext(Store)

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
    />
  )
}

export default App
