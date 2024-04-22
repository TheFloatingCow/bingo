import React, { useState } from 'react';

import classes from './Board.module.css'; //import classes
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Box from '../../components/UI/Box/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid

const Board = () => {

    /*
    Data types:
    Monthly, Yearly
    General, Academic, Driving, Sports,
    */
    const [data, setData] = useState({
        data: {
            monthly: {
                general: [
                    "general 1",
                    "general 2"
                ],
                academic: [
                    "academic 1",
                    "academic 2"
                ],
                driving: [
                    "driving 1",
                    "driving 2"
                ]
            },
            yearly: {
                general: [
                    "general 1",
                    "general 2"
                ],
                academic: [
                    "academic 1",
                    "academic 2"
                ],
                driving: [
                    "driving 1",
                    "driving 2"
                ]
            }
        }
    })



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
                    {i + 1} {j + 1}</Box>
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

export default Board;