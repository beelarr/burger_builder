import React from 'react';
import Ingredient from './Ingredients/Ingredients';

import styles from './Burger.css';

const burger = props => {
    return(
        <div className={styles.Burger}>
            <Ingredient type="bread-top"/>
            <Ingredient type="cheese"/>
            <Ingredient type="meat"/>
            <Ingredient type="bread-bottom"/>
        </div>
    );

};


export default burger;
