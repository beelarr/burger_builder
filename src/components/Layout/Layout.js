import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


import classes from './Layout.css';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosed = () => {
        this.setState({showSideDrawer: false})
    };

    toggleSideDrawer = () =>
        this.setState( prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });



    render() {
        return (
            <Aux>
                <Toolbar open={this.toggleSideDrawer} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosed}/>
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
