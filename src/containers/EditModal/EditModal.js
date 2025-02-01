import React from 'react';

import classes from './EditModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import CheckboxMenu from "../../components/UI/CheckboxMenu/CheckboxMenu";
import ToggleButtonMenu from "../../components/UI/ToggleButtonMenu/ToggleButtonMenu";
import Button from '../../components/UI/Button/Button';

const EditModal = (props) => {

    const { state, closeMenu, editTypes } = props;

    const updateTime = (newTime) => {
        let newTypes = { ...state.types };
        newTypes["time"] = newTime;
        editTypes(newTypes);
    }

    const updateTheme = (newTheme) => {
        console.log("HELLO");
        let newTypes = { ...state.types };
        newTypes["time"] = newTheme;
    }

    const updateTypes = (newTypes) => {
        editTypes(newTypes);
    }

    return (
        <Aux className={classes.EditModal}>
            <ToggleButtonMenu option={state.types["time"]} update={updateTime} option1={"Monthly"} option2={"Yearly"} />
            <CheckboxMenu types={state.types} update={updateTypes} />
            <Button clicked={closeMenu} btnType="NewModal">Done</Button>
        </Aux>
    )
}

export default EditModal;