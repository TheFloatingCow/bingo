import React from 'react';

import classes from './EditModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import CheckboxMenu from "../../components/UI/CheckboxMenu/CheckboxMenu";
import ToggleButtonMenu from "../../components/UI/ToggleButtonMenu/ToggleButtonMenu";
import Button from '../../components/UI/Button/Button';

const EditModal = (props) => {

    const { types, closeMenu } = props;

    return (
        <Aux className={classes.EditModal}>
            <ToggleButtonMenu types={types} />
            <CheckboxMenu types={types} />
            <Button clicked={closeMenu} btnType="NewModal">Done</Button>
        </Aux>
    )
}

export default EditModal;