import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import CheckoutData from './CheckoutData/CheckoutData';

class Checkout extends Component {
    state = {
        ingredients: {
            lettuce: null,
            meat: null,
            cheese: null,
            bacon: null
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            console.log('param', param);
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients: ingredients})
    };


    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    };


    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-info')
    };

    render() {
        console.log('props checkout', this.props);
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.url + '/contact-info'} component={CheckoutData}/>
            </div>
        )
    }
}

export default Checkout;
