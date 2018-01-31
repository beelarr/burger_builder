import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


class BurgerBuilder extends Component {

    state = {
        toBePurchased: false,
        showModal: false,
        loading: false,
        error: false
    };

    componentDidMount () {
      // axios.get('https://burgerbuilder-beelarr.firebaseio.com/ingredients.json')
      //     .then(response => this.setState({ ingredients: { ...response.data } }))
      //     .catch(error => this.setState({ error: error.message }))
    };

    updateToBePurchased = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map( key => ingredients[key] ).reduce((sum, value) => sum + value, 0);
        this.setState({toBePurchased: sum > 0})

    };



    showModal = () => {
        this.setState({showModal: true})
    };

    closeModal = () => {
        this.setState({showModal: false })
    };

    continuePurchase = () => {
        const queryParams = [];
        for (let i in this.props.burgerContent){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.burgerContent[i]))
        }
        queryParams.push('price=' + this.props.price);
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString

        });
    };

    render() {
        const disabledInfo = {
            ...this.props.burgerContent
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
            //sets this version of state from a number to true or false for disabling buttons
        }

        let burger = this.state.error ? `Ingredient can't be loaded because of: ${this.state.error}` : <Spinner/>;

        if (this.props.burgerContent)
            burger = (
                <Aux>
                    <Burger
                        ingredients={this.props.burgerContent}
                    />
                    <BuildControls
                        price={this.props.price}
                        addIngredient={this.props.onIngredientAdd}
                        removeIngredient={this.props.onIngredientDelete}
                        disabled={disabledInfo}
                        toBePurchased={this.state.toBePurchased}
                        showModal={this.showModal}
                    />
                </Aux>
            );




        return (
            <Aux>
                <Modal show={this.state.showModal} closeModal={this.closeModal}>

                    { this.state.loading || !this.props.burgerContent ? <Spinner /> : (
                    <OrderSummary
                        ingredients={this.props.burgerContent}
                        cancel={this.closeModal}
                        continue={this.continuePurchase}
                        totalPrice={this.props.price}/> ) }
                </Modal>
                {burger}

            </Aux>
        )
    }
}

const mapStateToProps = state => {
  return {
      burgerContent: state.ingredients,
      price: state.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdd: (ingredientName, totalPrice) => dispatch({
            type: actionTypes.ADD_INGREDIENT,
            payload: {
                ingredientName: ingredientName,
                totalPrice: totalPrice
            }
        }),
        onIngredientDelete: (ingredientName, totalPrice) => dispatch({
            type: actionTypes.DELETE_INGREDIENT,
            payload: {
                ingredientName: ingredientName,
                totalPrice: totalPrice

            }
        })
    }

};




export default connect(mapDispatchToProps, mapStateToProps)(withErrorHandler(BurgerBuilder, axios));
