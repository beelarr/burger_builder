import React, { Component } from 'react';

import styles from './Backdrop.css';

const backdrop = props => (
    props.show ? <div className={styles.Backdrop} ></div> : null

);


export default backdrop;
