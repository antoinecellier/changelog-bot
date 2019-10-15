import React, { useReducer, useContext } from 'react'
import { node } from 'prop-types'

import { useAuthenticationContext } from '../authentication'

import actionsCreator from './actionsCreator'

const HistoricContext = React.createContext()

export const useHistoricContext = () => useContext(HistoricContext)

const initialState = {
  historic: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_LIST':
      return { ...state, historic: action.payload }
    default:
      return state
  }
}

export const HistoricProvider = ({ children }) => {
  const { state: authentication } = useAuthenticationContext()

  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = actionsCreator(dispatch, { authentication })

  return (
    <HistoricContext.Provider value={{ state, actions }}>
      {children}
    </HistoricContext.Provider>
  )
}

HistoricProvider.propTypes = {
  children: node,
}
