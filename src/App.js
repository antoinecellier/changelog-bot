import React, { useContext, useEffect } from 'react'
import isUndefined from 'lodash/isUndefined'

import { Store } from './state/authentication'
import './App.css'


const App = () => {
  const { state, actions } = useContext(Store)
  
  useEffect(() => { isUndefined(state.user) && actions.checkLogin() })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={actions.login}>Login</button>
        {state.user && <button onClick={actions.logout}>Logout</button>}
      </header>
    </div>
  )
}

export default App
