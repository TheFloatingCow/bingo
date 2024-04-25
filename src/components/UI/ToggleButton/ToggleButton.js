import React from 'react';

import classes from './ToggleButton.module.css';

const toggleButton = (props) => {

    return (
        <label className="switch">
            <input
                disabled={props.disabled}
                type="checkbox"
                className={classes.ToggleButton}
                onClick={props.clicked}>{props.children}</input>
            <span className="slider"></span>
        </label>

    )

};

export default toggleButton;