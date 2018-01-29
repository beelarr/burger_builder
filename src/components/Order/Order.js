import React from 'react';
import styles from './Order.css';

const order = props => {
    const ingredients = [];

    for(let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]})
    }

    const ingredientOutput = ingredients.map(i => {
        return (
            <span
                key={i.name}
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 1%',
                    border: '1px solid grey',
                    padding: '1%'

                }}
            >
                {i.name} ({i.amount})
            </span> )
    })
    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
        </div>
    )
};


export default order
