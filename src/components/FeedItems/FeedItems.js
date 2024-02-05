import React from 'react';

import classes from './FeedItems.css';

const feedItems = (props) => (
    <div className={classes.FeedItems}>
        {props.children}
    </div>
)

export default feedItems;