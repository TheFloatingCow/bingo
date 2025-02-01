import React, { useState } from 'react';

import classes from './ToggleButtonMenu.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonMenu = (props) => {

    const { option, update, options, values } = props;

    const [alignment, setAlignment] = useState(option);

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            update(newAlignment);
        }
    };

    return (
        <Aux className={classes.ToggleButtonMenu}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Time">
                <ToggleButton className={classes.ToggleButton} value={values[0]}>{options[0]}</ToggleButton>
                <ToggleButton className={classes.ToggleButton} value={values[1]}>{options[1]}</ToggleButton>
            </ToggleButtonGroup>
        </Aux>
    )
};

export default ToggleButtonMenu;