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
import * as actions from '../../store/actions/index';


class BurgerBuilder extends Component {

    state = {
        showModal: false,

    };

    componentWillMount() {
        console.log('burgerContent', this.props.burgerContent);
    }

    componentDidMount () {
        this.props.onInitFetchIngredients()
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
        this.props.onInitPurchase();
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

        let burger = this.props.error ? `Ingredient can't be loaded because of: ${this.props.error}` : <Spinner/>;

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
      burgerContent: state.burgerBuilder.ingredients,
      price: state.burgerBuilder.totalPrice,
      error: state.burgerBuilder.error

  }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdd: ingredientName => dispatch(actions.addIngredient(ingredientName)),
        onIngredientDelete: ingredientName => dispatch(actions.deleteIngredient(ingredientName)),
        onInitFetchIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }

};




export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
