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
    General, Academic, Driving, Sports, Cooking, Work, Gym, Gaming, Voice Lines
    */

    const [monthData] = useState({
        general: [
            "Set off the fire alarm",
            "Go to a new restaurant",
            "Finish a book",
            "Get new shoes",
            "Do volunteering",
            "Write a letter",
            "Get sick",
            "Don't get sick all month",
            "Don't check your phone for a whole day",
            "Visit a museum or art gallery",
            "Keep a plant alive all month",
            "Take a picture every day of the month",
            "Watch 3 movies in a day",
            "Go camping",
            "Try a new ice cream or boba flavour",
            "See fireworks",
            "Go on a hike",
            "Visit a new place"
        ],
        academic: [
            "Fail a test/quiz",
            "Got to another school campus",
            "Study as much as you said you would",
            "Pass all your tests/quizzes"
        ],
        driving: [
            "See a car flipped over on the side of the road",
            "Get pulled over while driving",
            "Run a red light",
            "Drive past some cows and say moo"
        ],
        sports: [
            "Go to a competition for your sport",
            "Go to a sports game"
        ],
        cooking: [
            "Set off the smoke detector while cooking",
            "Burn something in the oven",
            "Cook a new dish"
        ],
        work: [
            "Get a new job",
            "Quit your job",
            "Meet your monthly goal at work",
            "Get employee of the month",
            "Miss a lunch break"
        ],
        gym: [
            "Hit a new PR at the gym",
            "Someone compliments your physique",
            "Hit legs at least once a week",
            "Hit the gym 5 times in a week",
            "Spend more than 2 hours at the gym",
            "Stretch at least 3 times a week"
        ],
        gaming: [
            "Have someone call you a racial slur in voice chat",
            "Hit a new peak rank in any game",
            "Complete a singleplayer video game"
        ],
        voiceline: [
            "I got railed",
            "Shot on my back",
            "*Yells*",
            "What the sigma",
            "Bro/Bruh",
            "These guys are so weird",
            "HELP",
            "They're coming",
            "Pause",
            "What?",
            "Type shit",
            "Flip",
            "*Gets hyped*",
            "You're crazy",
            "Built different",
            "You're better",
            "They must be cheating",
            "Cooked",
            "Cooking",
            "Let me cook",
            "Goated",
            "Vro",
            "Ayo?",
            "Talk to randoms",
            "Erm actually",
            "Good shit/job",
            "*Whiff horribly*",
            "You're him/that guy",
            "Slay",
            "Lets go",
            "What are they doing",
            "Where was he looking",
            "Does he clutch?",
            "If you clutch I'll ______",
            "I'm so bad",
            "LAG",
            "They're smurfing", 
            "How did that not hit",
            "No way",
            "Behind you",
            "*Weird laugh*",
            "Move",
            "*Blames teammate*",
            "Where was he?",
            "That's crazy",
            "Why",
            "Chat",
            "Erm",
            "Joever",
            "*Random accent*",
            "Lock in",
            "*Starts singing*",
            "Nice try"
        ]
    });

    const [yearData] = useState({
        general: [
            "Get dumped",
            "Get arrested",
            "Go to the hospital",
            "Get attacked by a wild animal",
            "Get a new pet",
            "Don't get sick all year",
            "Go camping",
            "Finish a book in a new genre",
            "Visit a new city",
            "Visit a new country",
            "Call 911 for any reason"
        ],
        academic: [
            "Pass all of your courses",
            "Get a scholarship",
            "Pass all your finals"
        ],
        driving: [
            "Crash your car",
            "Witness an accident on the road",
            "Go on a road trip"
        ],
        sports: [
            "Podium at a large sports event",
            "An olympian in your sport follows you",
            "Run a marathon",
            "Try a new sport"
        ],
        cooking: [
            "Cause an allergic reaction with your cooking",
            "Start a fire in the kitchen",
            "Take a cooking class"
        ],
        work: [
            "Get fired",
            "Get a promotion"
        ],
        gym: [
            "Ask someone out/get asked out at the gym"
        ],
        gaming: [
            "Get DDOS'd",
            "Log 1000 hours in a game in a year",
            "100% a video game"
        ],
        voiceline: [
            "This is a placeholder"
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
    let boardSize = 5;
    let center = (boardSize ** 2 - 1)/2;

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            boardList.push(
                <Box
                    key={key}
                    xs={12/boardSize}>
                    {key === center ? "FREE" : (key > center ? boardData[key - 1] : boardData[key])}
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