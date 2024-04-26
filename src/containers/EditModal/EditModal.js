import React from 'react';

import classes from './EditModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import CheckboxMenu from "../../components/UI/CheckboxMenu/CheckboxMenu";
import ToggleButtonMenu from "../../components/UI/ToggleButtonMenu/ToggleButtonMenu";
import Button from '../../components/UI/Button/Button';

const EditModal = (props) => {

    const { types, closeMenu, editTypes } = props;

    const updateTime = (newTime) => {
        let newTypes = { ...types };
        newTypes["time"] = newTime;
        editTypes(newTypes);
    }

    const updateTypes = (newTypes) => {
        editTypes(newTypes);
    }

    return (
        <Aux className={classes.EditModal}>
            <ToggleButtonMenu time={types["time"]} update={updateTime} />
            <CheckboxMenu types={types} update={updateTypes} />
            <Button clicked={closeMenu} btnType="NewModal">Done</Button>
        </Aux>
    )
}

export default EditModal;