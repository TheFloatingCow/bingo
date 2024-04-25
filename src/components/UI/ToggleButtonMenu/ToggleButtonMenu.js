import React from 'react';

import classes from './ToggleButtonMenu.module.css';

const ToggleButtonMenu = (props) => {

    return (
        <Aux>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleToggle}
                aria-label="Platform" >
                <ToggleButton value="web">Monthly</ToggleButton>
                <ToggleButton value="android">Yearly</ToggleButton>
            </ToggleButtonGroup>
        </Aux>
    )
};

export default ToggleButtonMenu;