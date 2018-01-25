import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


import classes from './Layout.css';


class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerOpenClosed = () => {
        this.setState({showSideDrawer: false})
    };


    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerOpenClosed}/>
                <div>   Backdrop</div>
                <main
                    className={classes.Content}
                >
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}



export default Layout;
