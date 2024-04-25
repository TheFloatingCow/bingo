import React, { useState } from 'react';

import classes from './EditModal.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Check from '../../components/UI/Checkbox/Checkbox';
import Checkbox from '@mui/material/Checkbox'; // Checkbox
import FormGroup from '@mui/material/FormGroup'; // FormGroup
import FormControlLabel from '@mui/material/FormControlLabel'; // FormControlLabel
import Box from '@mui/material/Box'; // Box

const EditModal = (props) => {

    const { types } = props;

    let keys = Object.keys(types)

    const [checked, setChecked] = useState(Array(keys.length-1).fill(true));

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const handleChange4 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const handleChange5 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const handleChange6 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    const handleChange7 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };

    // Capitalize the first letter of word
    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    let checklist = [];
    let key = 0;

    for (let i = 1; i < keys.length; i++) {
        checklist.push(
            <FormControlLabel
                label={capitalize(keys[i])}
                control={<Checkbox checked={checked[i-1]} onChange={handleChange2} size="large" />} />
        )
        key++;
    }

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {checklist}
        </Box>
    );

    return (
        <Aux className={classes.EditModal}>
            EditModal contents
            <FormGroup>
                <FormControlLabel label="Select all" control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                        size="large" />
                } />
            </FormGroup>
            {children}
        </Aux>
    )
}

export default EditModal;