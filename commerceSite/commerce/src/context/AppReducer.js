import React from 'react';

export default (state, action) => {
    let index;
    switch(action.type) {
        case 'ADD_TO_CART':
            console.log('Adding    ' + action.payload);
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case 'ADD_TO_COMP_FILTERS':
            return {
                ...state,
                companyFilters: [action.payload, ...state.companyFilters]
            }
        case 'REMOVE_FROM_COMP_FILTERS':
            index = state.companyFilters.indexOf(action.payload);
            state.companyFilters.splice(index, 1);
            return { 
                ...state
            }
        case 'ADD_TO_TYPE_FILTERS':
            return {
                ...state,
                typeFilters: [action.payload, ...state.typeFilters]
            }
        case 'REMOVE_FROM_TYPE_FILTERS':
            index = state.typeFilters.indexOf(action.payload);
            state.typeFilters.splice(index, 1);
            return { 
                ...state
            }
        case 'SET_PRICE_FILTER':
            return {
                ...state,
                priceFilters: action.payload
            }
        default:
            return state

    }
}