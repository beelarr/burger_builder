import React from 'react';

import Logo from '../../Logo/Logo';
import NavComponents from '../NavComponents/NavComponents';

const sideDrawer = props => {

    return(
        <div>
            <Logo/>
            <nav>
                <NavComponents/>
            </nav>

        </div>
    );
};

export default sideDrawer;
