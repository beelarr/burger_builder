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
import * as burgerBuilderActions from '../../store/actions/index';


class BurgerBuilder extends Component {

    state = {
        showModal: false,

    };

    componentDidMount () {

    };

    updateToBePurchased = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map( key => ingredients[key] ).reduce((sum, value) => sum + value, 0);
        return sum > 0

    };



    showModal = () => {
        this.setState({showModal: true})
    };

    closeModal = () => {
        this.setState({showModal: false })
    };

    continuePurchase = () => {
        this.props.history.push('/checkout');
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
                        toBePurchased={this.updateToBePurchased(this.props.burgerContent)}
                        showModal={this.showModal}
                    />
                </Aux>
            );




        return (
            <Aux>
                <Modal show={this.state.showModal} closeModal={this.closeModal}>

                    <OrderSummary
                        ingredients={this.props.burgerContent}
                        cancel={this.closeModal}
                        continue={this.continuePurchase}
                        totalPrice={this.props.price}/>
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
        onIngredientAdd: ingredientName => dispatch(burgerBuilderActions.addIngredient(ingredientName)),
        onIngredientDelete: ingredientName => dispatch(burgerBuilderActions.deleteIngredient(ingredientName))
    }

};




export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
