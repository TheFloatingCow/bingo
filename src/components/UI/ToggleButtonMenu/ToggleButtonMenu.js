import React, { useState } from 'react';

import classes from './ToggleButtonMenu.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonMenu = (props) => {

    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Aux className={classes.ToggleButtonMenu}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform" >
                <ToggleButton value="web">Monthly</ToggleButton>
                <ToggleButton value="android">Yearly</ToggleButton>
            </ToggleButtonGroup>
        </Aux>
    )
};

export default ToggleButtonMenu;