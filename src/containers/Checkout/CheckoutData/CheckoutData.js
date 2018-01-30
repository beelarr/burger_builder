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



    render() {
        console.log('props ckout data', this.props);
        return (
            <div className={styles.ContactData}>
                <h4>Enter Your Contact Info</h4>
                <hr/>
                {this.state.loading ? <Spinner/> : (
                    <form action="">
                        <Input inputtype="input" type="text" name="name" placeholder="Your Name"/>
                        <Input inputtype="input" type="text" name="street" placeholder="Your Address"/>
                        <Input inputtype="input" type="text" name="state" maxLength="2" placeholder="Your State"/>
                        <Input inputtype="input" type="number" name="zip code" placeholder="Zip Code"/>
                        <Input inputtype="input" type="email" name="email" placeholder="Your Email"/>
                        <Input inputtype="input" type="text" name="delivery" placeholder="Preferred Delivery Method"/>
                        <br/>
                        <Button click={this.orderHandler} btnType="Success">ORDER</Button>
                    </form>

                )}

            </div>
        )
    }
}

export default CheckoutData;
