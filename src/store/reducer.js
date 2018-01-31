import * as actionTypes from './actions';


const initialState = {
    ingredients: {
    lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
},
    totalPrice: 2
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,   // doesn't create a deep clone ie. ingredients object points to whatever state is.
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1
                }
            };
        case actionTypes.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1
                }

            };
        default:
            return state;
    }

};

export default reducer;
