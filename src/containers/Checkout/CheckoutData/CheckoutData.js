import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './CheckoutData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

import Input from '../../../components/UI/Input/Input';

import { connect } from 'react-redux';


class CheckoutData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },

            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,

            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your City'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            zip_code: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false,
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your State'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
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
                value: 'free',
                validation: {},
                valid: true

            },
        },
        loading: false,
        formIsValid: false
    };

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for (let key in this.state.orderForm) {

            formData[key] = this.state.orderForm[key].value
        }
        const order = {
            ingredients: this.props.burgerContent,
            price: this.props.price,
            orderData: formData
        };

            axios.post('/orders.json', order)
                .then(data => {
                    this.setState({loading:false});
                    this.props.history.push('/')
                })
                .catch(error => {
                    alert(`Nope, that didn't work.  We think it was ${error.message}`);
                    this.setState({loading:false})

                })
    };

    validationCheck = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    };

    inputChangeHandler = (event, inputIdentifier) =>{

        const updateForm = { ...this.state.orderForm };
        const updateFormElement = { ...updateForm[inputIdentifier] };
        updateFormElement.value = event.target.value;
        updateFormElement.valid = this.validationCheck(updateFormElement.value, updateFormElement.validation);
        updateFormElement.touched = true;
        updateForm[inputIdentifier] = updateFormElement;

        let formIsValid = true;
        for (let key in updateForm) {
            formIsValid = updateForm[key].valid && formIsValid  //checks if state.valid and the current form key are valid
        }

        this.setState({orderForm: updateForm, formIsValid: formIsValid})
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
                    <form onSubmit={this.orderHandler}>
                        {formElementArray.map(element => (
                            <Input
                                key={element.id}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.elementConfig.placeholder}
                                changed={event => this.inputChangeHandler(event, element.id)}
                                shouldValidate={element.config.validation}
                                invalid={!element.config.valid}
                                touched={element.config.touched}
                            />
                        ))}
                        <br/>
                        <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
                    </form>

                )}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        burgerContent: state.ingredients,
        price: state.totalPrice
    }
};


export default connect(mapStateToProps)(CheckoutData);
