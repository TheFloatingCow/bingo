import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../Button/Button';
import classes from './ButtonMenu.module.css';

const ButtonMenu = (props) => {

    return (
        <Aux className={classes.ButtonMenu}>
            <Button clicked={props.openNewMenu}>NEW</Button>
            <Button clicked={props.openEditMenu}>EDIT</Button>
        </Aux>
    )
}

export default ButtonMenu;