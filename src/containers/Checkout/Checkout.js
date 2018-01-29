import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            lettuce: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    };


    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-info')
    };

    render() {
        console.log('props', this.props);
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
            </div>
        )
    }
}

export default Checkout;
