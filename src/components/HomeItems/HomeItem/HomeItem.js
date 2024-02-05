import React from 'react';

import classes from './HomeItem.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const homeItem = ( props ) => {
    let homeElement = <p
            className={classes.HomeItem}>
                {props.elementConfig.placeholder}: <b>{props.value}</b>
        </p>

    return (
        <Aux>
            {homeElement}
        </Aux>
    )
};

export default homeItem;