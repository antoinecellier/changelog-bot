import React from 'react'
import useAsyncReducer from '../../hooks/useAsyncReducer';
import actionsCreator from './actionsCreator'

export const Store = React.createContext();

const initialState = {
    historic: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_LIST':
            return { ...state, historic: action.payload };
        default:
            return state;
    }
}

export const HistoricProvider = (props) => {
    const [state, dispatch] = useAsyncReducer(reducer, initialState);
    const actions = actionsCreator(dispatch)
    console.log(actions)
    return (
        <Store.Provider value={{state, actions}}>
            {props.children}
        </Store.Provider>
    )
}