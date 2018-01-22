import React from 'react';
import Ingredient from './Ingredients/Ingredients';

import styles from './Burger.css';

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <Ingredient key={ingredient + index} type={ingredient} /> ;
        })
    }).reduce((arr, element) => arr.concat(element), []);
    // arr is the empty arr defined as the second arg, element is each iteration

    transformedIngredients.length === 0 ? transformedIngredients = <p>Are you on a gluten only diet?!?!</p> : transformedIngredients;

    return(
        <div className={styles.Burger}>
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );

};


export default burger;
