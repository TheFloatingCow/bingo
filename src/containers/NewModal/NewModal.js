import React from 'react';

import classes from './NewModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const NewModal = () => {

    return (
        <Aux className={classes.NewModal}>
            Create new board?
        </Aux>
    )
}

export default NewModal;