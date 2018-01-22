import React from 'react';
import Ingredient from './Ingredients/Ingredients';

import styles from './Burger.css';

const burger = props => {
    const transformedIngredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <Ingredient key={ingredient + index} type={ingredient} /> ;
        })
    });
    return(
        <div className={styles.Burger}>
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );

};


export default burger;
