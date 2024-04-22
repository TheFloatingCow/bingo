import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../Button/Button';
import classes from './ButtonMenu.module.css';

const ButtonMenu = (props) => {

    const {button1func, button2func} = props;

    return (
        <Aux className={classes.ButtonMenu}>
            <Button clicked={button1func}>NEW</Button>
            <Button clicked={button2func}>EDIT</Button>
        </Aux>
    )
}

export default ButtonMenu;