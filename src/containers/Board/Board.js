import React, { useState, useEffect } from 'react';

import classes from './Board.module.css'; //import classes
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Box from '../../components/UI/Box/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid

const Board = (props) => {

    const { types, updateBoard, cancelUpdateBoard } = props;

    /*
    Data types:
    Monthly, Yearly
    General, Academic, Driving, Sports, Cooking, Work
    */

    /* OLD STATE, TYPES NOW STORED IN App.js
    const [types, setTypes] = useState({
        time: "year",
        general: true,
        academic: true,
        driving: true,
        sports: true,
        cooking: true,
        work: true
    })
    */

    const [monthData, setMonthData] = useState({
        general: [
            "general 1m",
            "general 2m",
            "general 3m",
            "general 4m",
            "general 5m"
        ],
        academic: [
            "academic 1m",
            "academic 2m",
            "academic 3m",
            "academic 4m"
        ],
        driving: [
            "driving 1m",
            "driving 2m",
            "driving 3m",
            "driving 4m"
        ],
        sports: [
            "sports 1m",
            "sports 2m",
            "sports 3m",
            "sports 4m"
        ],
        cooking: [
            "cooking 1m",
            "cooking 2m",
            "cooking 3m",
            "cooking 4m"
        ],
        work: [
            "work 1m",
            "work 2m",
            "work 3m",
            "work 4m"
        ]
    })

    const [yearData, setYearData] = useState({
        general: [
            "general 1y",
            "general 2y",
            "general 3y",
            "general 4y",
            "general 5y"
        ],
        academic: [
            "academic 1y",
            "academic 2y",
            "academic 3y",
            "academic 4y"
        ],
        driving: [
            "driving 1y",
            "driving 2y",
            "driving 3y",
            "driving 4y"
        ],
        sports: [
            "sports 1y",
            "sports 2y",
            "sports 3y",
            "sports 4y"
        ],
        cooking: [
            "cooking 1y",
            "cooking 2y",
            "cooking 3y",
            "cooking 4y"
        ],
        work: [
            "work 1y",
            "work 2y",
            "work 3y",
            "work 4y"
        ]
    })

    const [boardData, setBoardData] = useState([])

    // Create a new board from states
    const newBoard = () => {
        setBoardData(boardData => {

            let newBoardData = []

            // Create array of possible square options
            let possibilities = []
            let keys = Object.keys(types)
            let typeLen = keys.length

            // Add possible squares to possibilities[]
            let dataArr = monthData
            if (types["time"] === "year") {
                dataArr = yearData
            }
            for (let index = 1; index < typeLen; index++) {
                let key = keys[index]
                // If the type is selected, add it to possibilities
                if (types[key]) {
                    possibilities.push(...dataArr[key])
                }
            }

            // Select possibilities to be on board
            for (let index = 0; index < 24; index++) {
                const randomIndex = Math.floor(Math.random() * possibilities.length)
                const chosenItem = possibilities.splice(randomIndex, 1)[0]
                newBoardData.push(chosenItem)
            }

            return newBoardData;
        })
    }

    // Check if board should be updated
    useEffect(() => {
        if (updateBoard) {
            newBoard()
            cancelUpdateBoard()
        }
    }, [updateBoard])

    let boardList = [];
    let key = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            boardList.push(
                <Box
                    key={key}
                    xs={2.4}>
                    {key === 12 ? "FREE" : (key > 12 ? boardData[key-1] : boardData[key])}
                </Box>
            )
            key++;
        }
    }

    return (
        <Aux>
            <Grid
                className={classes.Container}
                container rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                {boardList}
            </Grid>
        </Aux>
    )
}

export default Board;