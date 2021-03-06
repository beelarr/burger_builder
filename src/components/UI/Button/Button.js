import React from 'react';
import styles from './Button.css'

const button = props => (
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.click}
        disabled={props.disabled}
    >{props.children}</button>
);

export default button;
