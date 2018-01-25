import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import PropTypes from 'prop-types';


import classes from './Layout.css';


class Layout extends Component {
    state = {
        showSideDrawer: false
    };

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
                <main
                    className={classes.Content}
                >
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}

Layout.propTypes = {
    open: PropTypes.bool,
    closed: PropTypes.bool,
}

export default Layout;
