import React, { createContext, useReducer } from 'react'
import actionsCreator from './actionsCreator'

export const Store = createContext()

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

export const AuthenticationProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const actions = actionsCreator(dispatch)

    return (
        <Store.Provider value={{state, actions}}>
            {props.children}
        </Store.Provider>
    )
}