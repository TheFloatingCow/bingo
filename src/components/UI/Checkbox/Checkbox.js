import React from 'react';

import classes from './Checkbox.module.css';
import Checkbox from '@mui/material/Checkbox'; // Checkbox

const checkbox = (props) => {

    const { btnType } = props;

    return (
        <Checkbox
            disabled={props.disabled}
            type="button"
            className={`${classes.Checkbox} ${classes[btnType]}`}
            onClick={props.clicked}>{props.children}</Checkbox>
    )

};

export default checkbox;