import React from 'react';

import styles from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavComponents from '../NavComponents/NavComponents';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = props => {

    let classArray = [styles.SideDrawer, styles.Closed];
    if (props.open) {
        classArray = classArray.filter(el => el !== styles.Closed).concat(styles.Open)
    };

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={classArray.join(' ')} >
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <hr/>
                <nav>
                    <NavComponents/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
