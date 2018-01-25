import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    lettuce: .5,
    cheese: .75,
    meat: 2.5,
    bacon: 1.3
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 1,
        toBePurchased: false,
        showModal: false,
        loading: false,
    };

    updateToBePurchased = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map( key => ingredients[key] ).reduce((sum, value) => sum + value, 0);
        this.setState({toBePurchased: sum > 0})

    };

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;  // updates the ingredients
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients})  //new state from updated ingredients
        this.updateToBePurchased(updatedIngredients);
    };

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){return;}
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;  // updates the ingredients
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients})
        this.updateToBePurchased(updatedIngredients);

    };

    showModal = () => {
        this.setState({showModal: true})
    };

    closeModal = () => {
        this.setState({showModal: false })
    };

    continuePurchase = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Bryon Larrance',
                address: {
                    street_name: 'Sunnymeade Drive',
                    street_number: '1108',
                    city: 'Nashville',
                    zip_code: '37216',
                    country: 'USA'
                },
                email: 'bryonl@me.com'
            },
            delivery_method: 'priority'
        };

        axios.post('/orders.json', order)
            .then(data => {
                console.log(data);
                this.setState({loading:false, showModal: false})
            })
            .catch(error => {
                console.log(error.message);
                this.setState({loading:false, showModal: false})

            })

        // alert('You have continued!!')

    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
            //sets this version of state from a number to true or false for disabling buttons
        }



        return (
            <Aux>
                <Modal show={this.state.showModal} closeModal={this.closeModal}>
                    { this.state.loading ? <Spinner /> : (
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancel={this.closeModal}
                        continue={this.continuePurchase}
                        totalPrice={this.state.totalPrice}/> ) }
                </Modal>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <BuildControls
                    price={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    toBePurchased={this.state.toBePurchased}
                    showModal={this.showModal}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder
