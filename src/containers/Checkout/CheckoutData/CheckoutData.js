import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './CheckoutData.css'

class CheckoutData extends Component {
    state = {
        customer: {
                    name: '',
                    address: {
                        street_name: '',
                        street_number: '',
                        city: '',
                        zip_code: '',
                        state: ''
                    },
                    email: ''
                },
                delivery_method: ''

    };



    render() {
        return (
            <div className={styles.ContactData}>
                <h4>Enter Your Contact Info</h4>
                <hr/>
                <form action="">
                    <input type="text" name="name" placeholder="Your Name"/>
                    <input type="number" name="street-number" placeholder="Your Street Number"/>
                    <input type="text" name="street" placeholder="Your Street"/>
                    <input type="text" name="state" maxLength="2" placeholder="Your State"/>
                    <input type="number" name="zip code" placeholder="Zip Code"/>
                    <input type="email" name="email" placeholder="Your Email"/>
                    <input type="text" name="delivery" placeholder="Preferred Delivery Method"/>
                    <br/>
                    <Button btnType="Success">ORDER</Button>
                </form>

            </div>
        )
    }
}

export default CheckoutData;
