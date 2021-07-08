import React, { createContext, useReducer, useContext } from 'react'
import { node } from 'prop-types'
import actionsCreator from './actionsCreator'

const AuthenticationContext = createContext()

export const useAuthenticationContext = () => useContext(AuthenticationContext)

const initialState = {
  user: undefined,
  loading: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export const AuthenticationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = actionsCreator(dispatch)

  return (
    <AuthenticationContext.Provider value={{ state, actions }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

AuthenticationProvider.propTypes = {
  children: node,
}
