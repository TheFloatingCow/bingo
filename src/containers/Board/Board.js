import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

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
        return (
            <Aux>
                board
            </Aux>
        )
    }
}

export default Board;