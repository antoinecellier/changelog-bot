import React, { useReducer } from 'react'
import { node } from 'prop-types'
import actionsCreator from './actionsCreator'

export const Store = React.createContext()

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
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = actionsCreator(dispatch)
  return (
    <Store.Provider value={{ state, actions }}>
      {children}
    </Store.Provider>
  )
}

HistoricProvider.propTypes = {
  children: node,
}
