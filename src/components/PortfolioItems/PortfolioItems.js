import React from 'react';

import classes from './PortfolioItems.css';

const portfolioItems = (props) => (
    <div className={classes.PortfolioItems}>
        {props.children}
    </div>
)

export default portfolioItems;