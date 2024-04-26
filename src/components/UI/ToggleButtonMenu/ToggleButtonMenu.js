import React, { useState } from 'react';

import classes from './ToggleButtonMenu.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonMenu = (props) => {

    const { types } = props;

    const [alignment, setAlignment] = useState(types["time"]);

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <Aux >
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Time" >
                <ToggleButton selected className={classes.ToggleButton} value="month">Monthly</ToggleButton>
                <ToggleButton className={classes.ToggleButton} value="year">Yearly</ToggleButton>
            </ToggleButtonGroup>
        </Aux>
    )
};

export default ToggleButtonMenu;