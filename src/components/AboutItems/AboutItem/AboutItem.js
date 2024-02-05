import React from 'react';

import classes from './AboutItem.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const aboutItem = ( props ) => {
    let aboutElement = <p
            className={classes.AboutItem}>
                {props.elementConfig.placeholder}: <b>{props.value}</b>
        </p>

    return (
        <Aux>
            {aboutElement}
        </Aux>
    )
};

export default aboutItem;