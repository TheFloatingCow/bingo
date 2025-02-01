import React, { useState } from 'react';

import classes from './ToggleButtonMenu.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonMenu = (props) => {

    const { option, update, option1, option2 } = props;

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
                <ToggleButton className={classes.ToggleButton} value="month">{option1}</ToggleButton>
                <ToggleButton className={classes.ToggleButton} value="year">{option2}</ToggleButton>
            </ToggleButtonGroup>
        </Aux>
    )
};

export default ToggleButtonMenu;