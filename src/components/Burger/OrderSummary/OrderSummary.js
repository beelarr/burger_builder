import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: ${(props.totalPrice).toFixed(2)}</strong></p>

            <p>Continue to Checkout??</p>
            <Button click={props.cancel} btnType={'Danger'}>CANCEL</Button>
            <Button click={props.continue} btnType={'Success'} >CHECKOUT</Button>
        </Aux>
    )
};

export default orderSummary;
