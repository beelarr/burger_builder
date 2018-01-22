import React from 'react';
import styles from './Ingredients.css';

const ingredient = props => {
    let singleIngredient = null;

    switch (prop.type) {
        case('bread-bottom'):
            singleIngredient = <div className={styles.BreadBottom} />;
            break;
        case('bread-top'):
            singleIngredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1} />
                    <div className={styles.Seeds2} />
                </div>
            );
            break;
        case('meat'):
            singleIngredient = <div className={styles.Meat} />;
            break;
        case('cheese'):
            singleIngredient = <div className={styles.Cheese} />;
            break;
        case('bacon'):
            singleIngredient = <div className={styles.Bacon} />;
            break;
        case('lettuce'):
            singleIngredient = <div className={styles.Salad} />;
            break;
        default:
            singleIngredient = null;
    }

    return singleIngredient;

};


export default ingredient;
