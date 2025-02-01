import React from 'react';

import classes from './ErrorModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../../components/UI/Button/Button';

const ErrorModal = (props) => {

    const { closeMenu, theme } = props;

    return (
        <Aux className={`${classes.LightErrorModal}
                        ${theme === "dark" ? classes.DarkErrorModal : classes.LightErrorModal}`}>
            <Aux>Error: Not enough challenges have been selected. The board will be incomplete!</Aux>
            <Button clicked={closeMenu} btnType="NewModal" theme={theme}>OK</Button>
        </Aux>
    )
}

export default ErrorModal;