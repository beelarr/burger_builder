import React from 'react';
import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = props => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.addIngredient(ctrl.type)}
                removed={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]}

            />))}

            <button
                className={styles.OrderButton}
                disabled={!props.toBePurchased}
            >ORDER NOW</button>
    </div>
);

export default buildControls
