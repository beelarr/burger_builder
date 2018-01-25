import React from 'react';

import styles from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationComponents from '../NavComponents/NavComponents';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <div
            style={{
                color: 'white',
                cursor: 'pointer'
            }}
            className={styles.DrawerToggle}
            onClick={props.open}>
            <div className={styles.DrawerToggleInner}></div>
            <div className={styles.DrawerToggleInner}></div>
            <div className={styles.DrawerToggleInner}></div>
        </div>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly} >
            <NavigationComponents />
        </nav>
    </header>
);

export default toolbar;
