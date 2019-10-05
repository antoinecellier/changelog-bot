import React, { useReducer } from 'react'

export const Store = React.createContext();

const initialState = {
    episodes: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload };
        default:
            return state;
    }
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch }
    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}