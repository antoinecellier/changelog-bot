import React, { useReducer, useContext } from 'react'
import { node } from 'prop-types'

import { useAuthenticationContext } from '../authentication'

import actionsCreator from './actionsCreator'

const TagsContext = React.createContext()

export const useTagsContext = () => useContext(TagsContext)

const initialState = {
  list: [],
  selected: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_LIST':
      return { ...state, list: action.payload }
    case 'SELECT_TAG':
      return { ...state, selected: action.payload }
    default:
      return state
  }
}

export const TagsProvider = ({ children }) => {
  const { state: authentication } = useAuthenticationContext()

  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = actionsCreator(dispatch, { authentication })

  return (
    <TagsContext.Provider value={{ state, actions }}>
      {children}
    </TagsContext.Provider>
  )
}

TagsProvider.propTypes = {
  children: node,
}
