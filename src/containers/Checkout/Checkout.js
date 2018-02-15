import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import CheckoutData from './CheckoutData/CheckoutData';

import { connect } from 'react-redux';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    };


    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-info')
    };

    render() {
        let summary = <Redirect to="/"/>
        if (this.props.burgerContent) {
            summary = (
                <div>
                    <CheckoutSummary
                        ingredients={this.props.burgerContent}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}/>
                    <Route
                        path={this.props.match.url + '/contact-info'}
                        component={CheckoutData}/>
                </div>
            );
        }
        return summary

    }
}

const mapStateToProps = state => {
    return {
        burgerContent: state.ingredients,
    }



};

export default connect(mapStateToProps)(Checkout);
