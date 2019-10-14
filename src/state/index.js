import React, { useReducer } from 'react'
import { node } from 'prop-types'

export const Store = React.createContext()

const initialState = {
  episodes: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    default:
      return state
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  )
}

StoreProvider.propTypes = {
  children: node,
}

export default StoreProvider
