import React from 'react';

import classes from './Button.module.css';

const button = (props) => {

    const { btnType } = props;

    return (
        <button
            disabled={props.disabled}
            type="button"
            className={`${classes.Button} ${classes[btnType]}`}
            onClick={props.clicked}>{props.children}</button>
    )

};

export default button;