import React, { Component } from 'react';

import classes from './Board.module.css'; //import classes
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Grid from '@mui/material/Unstable_Grid2'; // Grid

class Board extends Component {

    /*
    Data types:
    Monthly, Yearly
    Academic, Driving, Sports,
    */
    state = {
        data: {
            monthly: {
                general: [
                    "Challenge 1",
                    "Challenge 2"
                ],
                academic: [
                    "Challenge 1",
                    "Challenge 2"
                ],
                driving: [
                    "Challenge 1",
                    "Challenge 2"
                ]
            },
            yearly: {
                general: [
                    "Challenge 1",
                    "Challenge 2"
                ],
                academic: [
                    "Challenge 1",
                    "Challenge 2"
                ],
                driving: [
                    "Challenge 1",
                    "Challenge 2"
                ] 
            }
        }
    }

    render () {
        
        let boardList = [];

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                boardList.push(
                    <Grid index={(i+1)*(j+1)} className={classes.Box} xs={2.3}>{i+1} {j+1}</Grid>
                )
            }
        }

        let board = (
            <Aux>
                <Grid className={classes.Container} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {boardList}
                </Grid>
            </Aux>
        )

        return (
            <Aux>
                {board}
            </Aux>
        )
    }
}

export default Board;