import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './CheckoutData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

import Input from '../../../components/UI/Input/Input';


class CheckoutData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
            },

            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                },

            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your City'
                },
            },
            zip_code: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your Zip Code'
                },
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your State'
                },
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
            },
            delivery_method: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'standard', displayValue: 'Standard'
                        },
                        {
                            value: 'priority', displayValue: 'Priority'
                        },
                        {
                            value: 'free', displayValue: 'Free'
                        }]
                },
            },
        },
        loading: false,
    };

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Bryon Larrance',
                address: {
                    street_name: 'Sunnymeade Drive',
                    street_number: '1108',
                    city: 'Nashville',
                    zip_code: '37216',
                    state: 'TN'
                },
                email: 'bryonl@me.com'
            },
            delivery_method: 'priority'
        };

            axios.post('/orders.json', order)
                .then(data => {
                    console.log(data);
                    this.setState({loading:false});
                    this.props.history.push('/')
                })
                .catch(error => {
                    alert(`Nope, that didn't work.  We think it was ${error.message}`);
                    this.setState({loading:false})

                })
    };

    inputChangeHandler = (event, inputIdentifier) =>{
        const updateForm = { ...this.state.orderForm };
        const updateFormElement = { ...updateForm[inputIdentifier] };
        updateFormElement.value = event.target.value;
        updateForm[inputIdentifier] = updateFormElement
        this.setState({orderForm: updateForm})
    };

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm){
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        console.log('formElementArray', formElementArray);

        return (
            <div className={styles.ContactData}>
                <h4>Enter Your Contact Info</h4>
                <hr/>
                {this.state.loading ? <Spinner/> : (
                    <form action="">
                        {formElementArray.map(element => (
                            <Input
                                key={element.id}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.elementConfig.placeholder}
                                changed={event => this.inputChangeHandler(event, element.id)}
                            />
                        ))}
                        <br/>
                        <Button click={this.orderHandler} btnType="Success">ORDER</Button>
                    </form>

                )}

            </div>
        )
    }
}

export default CheckoutData;
