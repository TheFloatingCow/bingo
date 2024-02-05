import React from 'react';

import classes from './PortfolioItem.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const portfolioItem = ( props ) => {
    let portfolioElement = <p
            className={classes.portfolioItem}>
                {props.elementConfig.placeholder}: <b>{props.value}</b>
        </p>

    return (
        <Aux>
            {portfolioElement}
        </Aux>
    )
};

export default portfolioItem;