import React from 'react';

import styles from './Input.css'

const input = props => {

    let inputElement = null;

    switch (props.elementType){
        case('input'):
            inputElement = ( <input
                                onChange={props.changed}
                                className={styles.InputElement}
                                {...props.elementConfig}
                                placeholder={props.value} />
            );
            break;
        case('textarea'):
            inputElement = ( <textarea
                                onChange={props.changed}
                                className={styles.InputElement}
                                {...props.elementConfig}
                                placeholder={props.value} />
            );
            break;
        case('select'):
            inputElement =  ( <select
                                onChange={props.changed}
                                className={styles.InputElement}
                                placeholder={props.value}>
                                    {props.elementConfig.options.map(option => (
                                        <option
                                            value={option.value}
                                            key={option.value}
                                        >{option.displayValue}</option>
                                    ))}
                            </select> );
            break;
        default:
            inputElement = ( <input
                                onChange={props.changed}
                                className={styles.InputElement}
                                {...props.elementConfig}
                                placeholder={props.value} />
            )
    };

    return (

    <div className={styles.Input} >
        <label className={styles.Label} htmlFor="">{props.label}</label>
        {inputElement}
    </div>

    )
};

export default input
