import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


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
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedState);
        case actionTypes.DELETE_INGREDIENT:
            const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedSt);
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.ingredients,
                error: false,
                totalPrice: 2
            });
        case actionTypes.FETCH_INGREDIETS_FAILED:
            return updateObject(state, { error: true });
        default:
            return state;
    }

};

export default reducer;
