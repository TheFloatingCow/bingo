import React, { Component } from 'react';

import classes from './EditModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class EditModal extends Component {
    render () {
        return (
            <Aux className={classes.EditModal}>
                EditModal contents
            </Aux>
        )
    }
}

export default EditModal;