import React from 'react';

import styles from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavComponents from '../NavComponents/NavComponents';

const sideDrawer = props => {

    return(
        <div className={styles.SideDrawer}>
            <Logo/>
            <nav>
                <NavComponents/>
            </nav>

        </div>
    );
};

export default sideDrawer;
