import React, { useState } from 'react';

import classes from './ToggleButtonMenu.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonMenu = (props) => {

    const { time, update } = props;

    const [alignment, setAlignment] = useState(time);

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
                <ToggleButton className={classes.ToggleButton} value="month">Monthly</ToggleButton>
                <ToggleButton className={classes.ToggleButton} value="year">Yearly</ToggleButton>
            </ToggleButtonGroup>
        </Aux>
    )
};

export default ToggleButtonMenu;