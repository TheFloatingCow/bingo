import React from 'react';

import classes from './Box.module.css';

import Grid from '@mui/material/Unstable_Grid2'; // Grid

const box = (props) => {

    return (
        <Grid
            index={props.index}
            className={classes.Box}
            xs={props.xs}
            minHeight={props.height}
            onClick={props.clicked}>{props.children}</Grid>
    )
}

export default box;