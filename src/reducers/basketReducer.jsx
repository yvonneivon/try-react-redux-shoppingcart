import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

// redux
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        mkBlack: {
            name: 'Michael Kors Black',
            price: 250.00,
            numbers: 0,
            inCart: false
        },
        mkPink: {
            name: 'Michael Kors Pink',
            price: 150.00,
            numbers: 0,
            inCart: false
        },
        mkCaramel: {
            name: 'Michael Kors Caramel',
            price: 130.00,
            numbers: 0,
            inCart: false
        },
        mkYellow: {
            name: 'Michael Kors Yellow',
            price: 200.00,
            numbers: 0,
            inCart: false
        },
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[action.payload]}
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}