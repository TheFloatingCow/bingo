import React, { useState } from 'react';

import classes from './EditModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import CheckboxMenu from "../../components/UI/CheckboxMenu/CheckboxMenu";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
//import ToggleButton from "../../components/UI/ToggleButton/ToggleButton";

const EditModal = (props) => {

    const { types } = props;

    const [alignment, setAlignment] = useState('web');

    const handleToggle = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Aux className={classes.EditModal}>
            EditModal contents
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleToggle}
                aria-label="Platform" >
                <ToggleButton value="web">Monthly</ToggleButton>
                <ToggleButton value="android">Yearly</ToggleButton>
            </ToggleButtonGroup>
            <CheckboxMenu types={types} />
        </Aux>
    )
}

export default EditModal;