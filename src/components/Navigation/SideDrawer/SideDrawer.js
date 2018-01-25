import React from 'react';

import styles from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavComponents from '../NavComponents/NavComponents';

const sideDrawer = props => {

    return(
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavComponents/>
            </nav>

        </div>
    );
};

export default sideDrawer;
