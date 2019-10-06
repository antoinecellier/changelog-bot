import React, { useContext, useEffect } from 'react'
import './App.css'
import { Store } from './store/historic'

function App() {
  const { state, actions } = useContext(Store)
  
  useEffect(() => {
    !state.historic.length && actions.list()
  })

  return (
    <div className="App">
      {console.log({ state, actions })}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App;
