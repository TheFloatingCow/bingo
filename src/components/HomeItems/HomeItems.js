import React from 'react';

import classes from './HomeItems.css';

const homeItems = (props) => (
    <div className={classes.HomeItems}>
        {props.children}
    </div>
)

export default homeItems;