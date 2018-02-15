import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};


export const purchaseBurgerFailure = error => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILURE,
        error: error
    };
};

export const purchaseBurderStart = () => {
    return {
        type: actionTypes.PURCHASING_BURGER
    }
};

export const purchasingBurger = orderData => {
    return dispatch => {
        dispatch(purchasingBurger());
        axios.post('/orders.json', orderData)
            .then(data => {
                console.log('response data', data);
                dispatch(purchaseBurgerSuccess(data.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFailure(error));
                alert(`Nope, that didn't work.  We think it was ${error.message}`);


            })
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}
