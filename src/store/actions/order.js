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

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASING_BURGER
    }
};

export const purchasingBurger = orderData => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
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
};

export const fetchOrdersSuccess = orders => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
};

export const fetchOrdersFailure = error => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILURE,
        error: error
    }
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json')
            .then(res => {
                const orders = [];
                for (let key in res.data) {
                    orders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrdersSuccess(orders))
            })
            .catch(error => {
                alert(`Something is wrong probably ${error.message}`);
                dispatch(fetchOrdersFailure(error))
            })
    }
}
