import * as actionTypes from '../actions/actionTypes';


const initialState = {
    ingredients: {
    lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
},
    totalPrice: 2
};

const INGREDIENT_PRICES = {
    lettuce: .5,
    cheese: .75,
    meat: 2.5,
    bacon: 1.3
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,   // doesn't create a deep clone ie. ingredients object points to whatever state is.
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.ingredientName]
            };
        case actionTypes.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload.ingredientName]

            };
        default:
            return state;
    }

};

export default reducer;
