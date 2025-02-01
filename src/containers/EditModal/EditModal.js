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

    const updateTheme = (newTheme) => {
        console.log("HELLO");
        let newTypes = { ...types };
        newTypes["time"] = newTheme;
    }

    const updateTypes = (newTypes) => {
        editTypes(newTypes);
    }

    return (
        <Aux className={classes.EditModal}>
            <ToggleButtonMenu option={types["time"]} update={updateTime} option1={"Monthly"} option2={"Yearly"} />
            <CheckboxMenu types={types} update={updateTypes} />
            <Button clicked={closeMenu} btnType="NewModal">Done</Button>
        </Aux>
    )
}

export default EditModal;