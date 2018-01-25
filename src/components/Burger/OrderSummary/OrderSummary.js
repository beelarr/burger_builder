import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // set as a class component for debugging.
    componentWillUpdate() {
        console.log('ORDER SUMMARY Will Update');
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return (
                    <li key={key}>
                        <span style={{textTransform: 'capitalize'}}>{key}</span>
                        : {this.props.ingredients[key]}
                    </li> )
            });


        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with these ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${(this.props.totalPrice).toFixed(2)}</strong></p>

                <p>Continue to Checkout??</p>
                <Button click={this.props.cancel} btnType={'Danger'}>CANCEL</Button>
                <Button click={this.props.continue} btnType={'Success'} >CHECKOUT</Button>
            </Aux>
        )
    }
};



export default OrderSummary;
