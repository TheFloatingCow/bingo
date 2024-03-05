import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <Button
            clicked={props.addTraining}>A button</Button>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;