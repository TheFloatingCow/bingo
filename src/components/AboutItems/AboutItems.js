import React from 'react';

import classes from './AboutItems.css';

const aboutItems = (props) => (
    <div className={classes.AboutItems}>
        {props.children}
    </div>
)

export default aboutItems;