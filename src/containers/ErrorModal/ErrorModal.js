import React from 'react';

import classes from './ErrorModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../../components/UI/Button/Button';

const ErrorModal = (props) => {

    const { closeMenu } = props;

    return (
        <Aux className={classes.ErrorModal}>
            Error: Not enough challenges have been selected. The board will be incomplete!
            <Button clicked={closeMenu} btnType="NewModal">OK</Button>
        </Aux>
    )
}

export default ErrorModal;