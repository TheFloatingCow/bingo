import React, { useState, useEffect, useCallback } from 'react';

import classes from './Board.module.css'; //import classes
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Box from '../../components/UI/Box/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid

const Board = (props) => {

    const { types, updateBoard, cancelUpdateBoard, openErrorModal } = props;

    /*
    Data types:
    Monthly, Yearly
    General, Academic, Driving, Sports, Cooking, Work, Gym, Gaming
    */

    const [monthData] = useState({
        general: [
            "general 1m",
            "general 2m",
            "general 3m",
            "general 4m",
            "general 5m",
            "Call 911 for any reason",
            "Set off the fire alarm",
            "Go to a new restaurant"
        ],
        academic: [
            "academic 1m",
            "academic 2m",
            "academic 3m",
            "academic 4m",
            "Fail a test"
        ],
        driving: [
            "driving 1m",
            "driving 2m",
            "driving 3m",
            "driving 4m",
            "See a car flipped over on the side of the road",
            "Get pulled over while driving",
            "Run a red light"
        ],
        sports: [
            "sports 1m",
            "sports 2m",
            "sports 3m",
            "sports 4m",
            "Go to a competition for your sport"
        ],
        cooking: [
            "cooking 1m",
            "cooking 2m",
            "cooking 3m",
            "cooking 4m",
            "Cause an allergic reaction",
            "Set off the smoke detector while cooking",
            "Burn something in the oven",
            "Cook a new dish"
        ],
        work: [
            "work 1m",
            "work 2m",
            "work 3m",
            "work 4m",
            "Get a new job",
            "Quit your job"
        ],
        gym: [
            "gym 1m",
            "gym 2m",
            "gym 3m",
            "gym 4m",
            "Hit a new PR at the gym",
            "Someone compliments your physique"
        ],
        gaming: [
            "gaming 1m",
            "gaming 2m",
            "gaming 3m",
            "gaming 4m",
            "Have someone call you a racial slur in voice chat",
            "Hit a new peak rank in any game"
        ]
    });

    const [yearData] = useState({
        general: [
            "general 1y",
            "general 2y",
            "general 3y",
            "general 4y",
            "general 5y",
            "Get dumped",
            "Get arrested",
            "Go to the hospital",
            "Get attacked by a wild animal",
            "Get a new pet"
        ],
        academic: [
            "academic 1y",
            "academic 2y",
            "academic 3y",
            "academic 4y",
            "Pass all of your courses",
            "Get a scholarship"
        ],
        driving: [
            "driving 1y",
            "driving 2y",
            "driving 3y",
            "driving 4y",
            "Crash your car",
            "Witness an accident on the road"
        ],
        sports: [
            "sports 1y",
            "sports 2y",
            "sports 3y",
            "sports 4y",
            "Podium at a large sports event",
            "An olympian in your sport follows you",
            "Run a marathon"
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
            "work 4y",
            "Get fired",
            "Get a promotion"
        ],
        gym: [
            "gym 1y",
            "gym 2y",
            "gym 3y",
            "gym 4y"
        ],
        gaming: [
            "gaming 1y",
            "gaming 2y",
            "gaming 3y",
            "gaming 4y",
            "Get DDOS'd",
            "Log 1000 hours in a game in a year"
        ]
    });

    const [boardData, setBoardData] = useState([]);

    // Create a new board from states
    const newBoard = useCallback(() => {

        let newBoardData = [];

        // Create array of possible square options
        let possibilities = [];
        let keys = Object.keys(types);

        // Add possible squares to possibilities[]
        let dataArr = monthData
        if (types["time"] === "year") {
            dataArr = yearData;
        }
        for (let index = 1; index < keys.length; index++) {
            let key = keys[index];
            // If the type is selected, add it to possibilities
            if (types[key]) {
                possibilities.push(...dataArr[key]);
            }
        }

        // Open Error Modal if there are not enough challenges
        if (possibilities.length < 24) {
            openErrorModal();
        }

        // Select possibilities to be on board
        for (let index = 0; index < 24; index++) {
            const randomIndex = Math.floor(Math.random() * possibilities.length);
            const chosenItem = possibilities.splice(randomIndex, 1)[0];
            newBoardData.push(chosenItem);
        }

        return newBoardData;
    }, [types, monthData, yearData, openErrorModal]);

    // Check if board should be updated
    useEffect(() => {
        if (updateBoard) {
            setBoardData(newBoard());
            cancelUpdateBoard();
        }
    }, [updateBoard, cancelUpdateBoard, newBoard]);

    let boardList = [];
    let key = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            boardList.push(
                <Box
                    key={key}
                    xs={2.4}>
                    {key === 12 ? "FREE" : (key > 12 ? boardData[key - 1] : boardData[key])}
                </Box>
            )
            key++;
        };
    };

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