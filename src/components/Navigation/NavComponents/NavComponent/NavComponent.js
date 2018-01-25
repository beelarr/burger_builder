import React, { Component } from 'react';
import styles from './NavComponent.css';

const navComponent = props => (
    <li className={styles.NavComponent}>
        <a
            href={props.link}
            className={props.active ? styles.active : null}
        >{props.children}</a>
    </li>
);

export default navComponent;
