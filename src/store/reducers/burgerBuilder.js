import * as actionTypes from '../actions/actionTypes';


const initialState = {
    ingredients: {
        lettuce: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    },
    totalPrice: 2,
    error: false
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
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]

            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                totalPrice: 2
            };
        case actionTypes.FETCH_INGREDIETS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }

};

export default reducer;
