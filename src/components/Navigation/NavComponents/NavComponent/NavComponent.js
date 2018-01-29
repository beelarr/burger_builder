import React, { Component } from 'react';
import styles from './NavComponent.css';
import { NavLink } from 'react-router-dom';

const navComponent = props => (
    <li className={styles.NavComponent}>
        <NavLink
            to={props.link}
            exact={props.exact}// keeps active class from being applied to all
            activeClassName={styles.active}

        >{props.children}</NavLink>
    </li>
);

export default navComponent;
