import React, { Component } from 'react';

import styles from './NavComponents.css';
import NavComponent from './NavComponent/NavComponent';

const navComponents = props => (
    <ul className={styles.NavComponents}>
        <NavComponent link="/" exact >Burger Builder</NavComponent>
        <NavComponent link="/orders">Orders</NavComponent>

    </ul>
);

export default navComponents;
