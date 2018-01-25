import React, { Component } from 'react';

import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';


class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        //Keeps from updating order summary in modal when modal is hidden.
        };

    componentWillUpdate() {
        console.log('MODAL Will Updated');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.closeModal}/>
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}
export default Modal;
