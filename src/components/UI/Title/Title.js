import React from 'react';

import classes from './Title.module.css';

const title = (props) => (
    <div className={classes.Title}>
        {props.children}
    </div>
);

export default title;