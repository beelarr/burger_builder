import React from 'react';

import styles from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationComponents from '../NavComponents/NavComponents';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <NavigationComponents />
    </header>
);

export default toolbar;
