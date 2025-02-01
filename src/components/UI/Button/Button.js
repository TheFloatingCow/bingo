import React from 'react';

import classes from './Button.module.css';

const button = (props) => {

    const { btnType, theme } = props;

    return (
        <button
            disabled={props.disabled}
            type="button"
            className={`${classes.Button} ${classes[theme+btnType]}`}
            onClick={props.clicked}>{props.children}</button>
    )

};

export default button;