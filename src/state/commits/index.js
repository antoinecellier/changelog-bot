import React, { useReducer, useContext } from 'react'
import { node } from 'prop-types'

import { useAuthenticationContext } from '../authentication'

import actionsCreator from './actionsCreator'

const CommitsContext = React.createContext()

export const useCommitsContext = () => useContext(CommitsContext)

const initialState = {
  list: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_LIST':
      return { ...state, list: action.payload }
    default:
      return state
  }
}

export const CommitsProvider = ({ children }) => {
  const { state: authentication } = useAuthenticationContext()

  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = actionsCreator(dispatch, { authentication })

  return (
    <CommitsContext.Provider value={{ state, actions }}>
      {children}
    </CommitsContext.Provider>
  )
}

CommitsProvider.propTypes = {
  children: node,
}
