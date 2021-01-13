import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
     cart: [],
     products: [],
     companyFilters: [],
     typeFilters: [],
     priceFilters: "0",
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function AddToCart(item) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        });
    };
    function RemoveFromCart(item) {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: item
        })
    };
    function AddToCompFilters(item) {
        dispatch({
            type: 'ADD_TO_COMP_FILTERS',
            payload: item
        })
    };
    function RemoveFromCompFilters(item) {
        dispatch({
            type: 'REMOVE_FROM_COMP_FILTERS',
            payload: item
        })
    };
    function AddToTypeFilters(item) {
        dispatch({
            type: 'ADD_TO_TYPE_FILTERS',
            payload: item
        })
    };
    function RemoveFromTypeFilters(item) {
        dispatch({
            type: 'REMOVE_FROM_TYPE_FILTERS',
            payload: item
        })
    };
    function SetPriceFilter(item) {
        dispatch({
            type: 'SET_PRICE_FILTER',
            payload: item
        })
    }

    function GetProducts() {
        let url = 'http://localhost:5000/products'
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            dispatch({
            type: 'GET_PRODUCTS',
            payload: data
            });
        })
    };

    return (
        <GlobalContext.Provider value = {{cart : state.cart, products : state.products,companyFilters : state.companyFilters, typeFilters : state.typeFilters, priceFilters : state.priceFilters,
                                        AddToCart, GetProducts, RemoveFromCart, AddToCompFilters, RemoveFromCompFilters, AddToTypeFilters, RemoveFromTypeFilters, SetPriceFilter}}>
            {children}
        </GlobalContext.Provider>
    )
}