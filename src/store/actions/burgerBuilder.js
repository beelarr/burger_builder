import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// action creator
export const addIngredient = name => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }

};

export const deleteIngredient = name => {
    return {
        type: actionTypes.DELETE_INGREDIENT,
        ingredientName: name
    }

};

export const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIETS_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burgerbuilder-beelarr.firebaseio.com/ingredients.json')
            .then(response => dispatch(setIngredients(response.data)))
            .catch(error => dispatch(fetchIngredientsFailed()) )
    }
}
