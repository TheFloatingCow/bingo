import React from 'react';

import classes from './EditModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import CheckboxMenu from "../../components/UI/CheckboxMenu/CheckboxMenu";
import ToggleButtonMenu from "../../components/UI/ToggleButtonMenu/ToggleButtonMenu";

const EditModal = (props) => {

    const { types } = props;

    return (
        <Aux className={classes.EditModal}>
            EditModal contents
            <ToggleButtonMenu />
            <CheckboxMenu types={types} />
        </Aux>
    )
}

export default EditModal;