import React from 'react';
import Logo from '../../assets/images/burger-logo.png';
import styles from './Logo.css'

const logo = props => (
    <div className={styles.Logo}>
        <img src={Logo} alt="Burger Builder Logo"/>
    </div>
);

export default logo
