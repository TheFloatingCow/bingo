import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <Button
            clicked={props.addTraining}>Add training</Button>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;