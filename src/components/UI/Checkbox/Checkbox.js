import React from 'react';

import classes from './Button.module.css';

const checkbox = (props) => {

    const { btnType } = props;

    return (
        <Checkbox
            disabled={props.disabled}
            type="button"
            className={`${classes.Button} ${classes[btnType]}`}
            onClick={props.clicked}>{props.children}</Checkbox>
    )

};

export default checkbox;