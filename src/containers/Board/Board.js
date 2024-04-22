import React, { Component } from 'react';

import classes from './Board.module.css'; //import classes
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Box from '../../components/UI/Box/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid

class Board extends Component {

    /*
    Data types:
    Monthly, Yearly
    General, Academic, Driving, Sports,
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
        let key = 0;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                key++;
                boardList.push(
                    <Box
                        key={key}
                        xs={2.4}>
                            {key === 13 ? "FREEEEE\n" : "content\n"}
                            {i+1} {j+1}</Box>
                )
            }
        }

        let board = (
            <Aux>
                <Grid className={classes.Container} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
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