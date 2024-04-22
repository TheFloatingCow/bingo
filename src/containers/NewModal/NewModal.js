import React, { Component } from 'react';

import classes from './NewModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class NewModal extends Component {
    render () {
        return (
            <Aux className={classes.NewModal}>
                Create new board?
            </Aux>
        )
    }
}

export default NewModal;