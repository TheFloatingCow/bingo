import React, { useState, useEffect } from 'react';

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

    const [checked, setChecked] = useState(Array(keys.length - 1).fill(true));

    const handleParentChange = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange = (event, key) => {
        setChecked(checked => {
            const newChecked = [...checked];
            newChecked[key] = event.target.checked;
            return newChecked;
        });
    };


    // Capitalize the first letter of word
    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    let checklist = [];

    for (let i = 1; i < keys.length; i++) {
        checklist.push(
            <FormControlLabel
                key={i - 1}
                label={capitalize(keys[i])}
                control={<Checkbox
                    key={i - 1}
                    checked={checked[i - 1]}
                    onChange={(event) => handleChange(event, i - 1)}
                    size="large" />} />
        )
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
                        onChange={handleParentChange}
                        size="large" />
                } />
            </FormGroup>
            {children}
        </Aux>
    )
}

export default EditModal;