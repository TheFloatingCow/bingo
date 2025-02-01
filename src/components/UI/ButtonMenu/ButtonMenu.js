import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../Button/Button';
import classes from './ButtonMenu.module.css';

const ButtonMenu = (props) => {

    const { menuType, button1Func, button2Func, button1Text, button2Text, theme } = props;

    return (
        <Aux className={`${classes.ButtonMenu} ${classes[menuType]}`}>
            <Button clicked={button1Func} btnType={menuType} theme={theme}>{button1Text}</Button>
            <Button clicked={button2Func} btnType={menuType} theme={theme}>{button2Text}</Button>
        </Aux>
    )
}

export default ButtonMenu;