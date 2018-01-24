import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
            <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>
                : {props.ingredients[key]}
            </li> )
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with these ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout??</p>
            <button onClick={props.click}>CANCEL</button>
            <button>CHECKOUT</button>
        </Aux>
    )
};

export default orderSummary;
