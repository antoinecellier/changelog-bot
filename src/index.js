import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import './firebase/init'

import { AuthenticationProvider } from './state/authentication'
import App from './App'
import 'antd/dist/antd.css'
import './index.css'

ReactDOM.render(
  <AuthenticationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthenticationProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
