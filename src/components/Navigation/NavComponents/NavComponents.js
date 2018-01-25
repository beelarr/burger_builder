import React, { Component } from 'react';

import styles from './NavComponents.css';
import NavComponent from './NavComponent/NavComponent';

const navComponents = props => (
    <ul className={styles.NavComponents}>
        <NavComponent />
    </ul>
);

export default navComponents;
